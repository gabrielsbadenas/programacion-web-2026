async function cargarLibrosDesdeBD() {
  let resp = await fetch("/api/libros");
  let libros = await resp.json();
  biblioteca = libros.map(
    (libro) =>
      new Libro(
        libro.id,
        libro.autor,
        libro.titulo,
        libro.precio,
        libro.stock,
        libro.imagen,
      ),
  );
  localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
}

app.get("/capturarLibrosBD", async function (req, res) {
  let conexion = await database.crearConexion(),
    librosCatalogo = await conexion.query("SELECT * FROM libros");
  res.json(librosCatalogo);
});
