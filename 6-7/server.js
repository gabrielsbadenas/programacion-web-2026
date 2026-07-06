const express = require('express');
const { DatabaseSync } = require('node:sqlite');
const path = require('path');

const dbPath = path.join(__dirname, 'data.db');
const db = new DatabaseSync(dbPath);

const app = express();
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000']
}));
app.use(express.json());
app.use(express.static(__dirname, { index: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'proyectoDOM.html'));
});

app.get('/api/libros', (req, res) => {
  const query = db.prepare('SELECT * FROM libros');
  const rows = query.all();
  res.json(rows);
});

app.post('/api/libros/stock', (req, res) => {
  try {
    const body = req.body;
    const items = Array.isArray(body)
      ? body
      : Array.isArray(body?.libros)
        ? body.libros
        : [body];

    if (!items.length) {
      return res.status(400).json({ error: 'Se debe enviar al menos un libro con id y stock.' });
    }

    const stmt = db.prepare('UPDATE libros SET stock = ? WHERE id = ?');

    items.forEach((item) => {
      const id = Number(item?.id);
      const stock = Number(item?.stock);

      if (!Number.isInteger(id) || !Number.isInteger(stock)) {
        throw new Error('Cada libro debe incluir un id y un stock válidos.');
      }

      stmt.run(stock, id);
    });

    res.status(200).json({ message: 'Stock actualizado correctamente', updated: items.length });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express server listening on http://localhost:${port}`));
