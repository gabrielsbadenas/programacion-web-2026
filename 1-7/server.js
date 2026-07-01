const express = require('express');
const { DatabaseSync } = require('node:sqlite');
const path = require('path');

const dbPath = path.join(__dirname, 'data.db');
const db = new DatabaseSync(dbPath);

const app = express();

app.use(express.static(__dirname, { index: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'proyectoDOM.html'));
});

app.get('/api/libros', (req, res) => {
  const query = db.prepare('SELECT * FROM libros');
  const rows = query.all();
  res.json(rows);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express server listening on http://localhost:${port}`));
