const express = require('express');
const { DatabaseSync } = require('node:sqlite');
const path = require('path');

const dbPath = path.join(__dirname, 'data.db');
const db = new DatabaseSync(dbPath);

const app = express();

app.get('/', (req, res) => {
  const query = db.prepare('SELECT * FROM libros');
  const rows = query.all();

  let html = `<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Libros</title>
      <style>
        table{border-collapse:collapse;width:90%;}
        td,th{border:1px solid #ccc;padding:8px;text-align:left}
      </style>
    </head>
    <body>
      <h1>Lista de libros</h1>
      <table>
        <thead>
          <tr>
            <th>id</th><th>autor</th><th>titulo</th><th>precio</th><th>stock</th><th>imagen</th><th>cantidad</th>
          </tr>
        </thead>
        <tbody>`;

  for (const r of rows) {
    html += `<tr><td>${r.id}</td><td>${r.autor}</td><td>${r.titulo}</td><td>${r.precio}</td><td>${r.stock}</td><td>${r.imagen}</td><td>${r.cantidad}</td></tr>`;
  }

  html += `</tbody></table></body></html>`;
  res.send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Express server listening on http://localhost:${port}`));
