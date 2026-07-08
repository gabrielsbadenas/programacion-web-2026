const express = require("express");
const { DatabaseSync } = require("node:sqlite");
const path = require("path");

const dbPath = path.join(__dirname, "data.db");
const db = new DatabaseSync(dbPath);

const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname, { index: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "proyectoDOM.html"));
});

app.get("/api/libros", (req, res) => {
  const query = db.prepare("SELECT * FROM libros");
  const rows = query.all();
  res.json(rows);
});
app.get("/capturarOfertas", function (req, res) {
  let conexion = db.prepare(
    "select * from libros where precio <= 2000 order by precio asc",
  );
  let librosOfertas = conexion.all();
  res.json(librosOfertas);
});
app.post("/cargarLibro", (req, res) => {
  try {
    console.log(req.body);
    const { tituloLibro, autor, precio, stock } = req.body,
    titulo = tituloLibro?.trim();
    const autorNombre = autor?.trim();
    const precioValue = Number(precio);
    const stockValue = Number(stock);

    if (!titulo || !autorNombre || !Number.isFinite(precioValue) || !Number.isFinite(stockValue)) {
      return res.status(400).json({ error: "Completa todos los campos correctamente." });
    }

    const stmt = db.prepare(
      "INSERT INTO libros (autor, titulo, precio, stock, imagen) VALUES (?, ?, ?, ?, ?)"
    );
    const result = stmt.run(autorNombre, titulo, precioValue, stockValue, "libroNuevo.jpg");

    res.redirect(303, "/");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "No se pudo cargar el libro." });
  }
});
app.post("/api/libros/stock", (req, res) => {
  try {
    const body = req.body;
    const items = Array.isArray(body)
      ? body
      : Array.isArray(body?.libros)
        ? body.libros
        : [body];

    if (!items.length) {
      return res
        .status(400)
        .json({ error: "Se debe enviar al menos un libro con id y stock." });
    }

    const stmt = db.prepare("UPDATE libros SET stock = ? WHERE id = ?");

    items.forEach((item) => {
      const id = Number(item?.id);
      const stock = Number(item?.stock);

      if (!Number.isInteger(id) || !Number.isInteger(stock)) {
        throw new Error("Cada libro debe incluir un id y un stock válidos.");
      }

      stmt.run(stock, id);
    });

    res.status(200).json({
      message: "Stock actualizado correctamente",
      updated: items.length,
    });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Express server listening on http://localhost:${port}`),
);
