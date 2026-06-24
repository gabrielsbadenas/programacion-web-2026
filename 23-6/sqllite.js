const { DatabaseSync } = require("node:sqlite");
const path = "data.db"; //":memory:"
// Creates an in-memory database (use a file path like 'data.db' to save to disk)
const db = new DatabaseSync(path);

// Create a table

function createTable() {
  db.exec(`
  CREATE TABLE libros (
    id INTEGER PRIMARY KEY,
    autor TEXT,
    titulo TEXT,
    precio INTEGER,
    stock INTEGER,
    imagen TEXT,
    cantidad INTEGER
  );
`);
}
// Insert a row

function insertRow() {
  const insert = db.prepare(
    "INSERT INTO libros (id, autor, titulo, precio, stock, imagen, cantidad) VALUES (?, ?, ?, ?, ?, ?, ?)",
  );
  insert.run(0, "George Orwell", "1984", 18000, 2, "libroNuevo.jpg", 1);
  insert.run(
    1,
    "George Orwell",
    "Rebelion en la granja",
    18000,
    2,
    "libroNuevo.jpg",
    1,
  );
  insert.run(
    2,
    "byung-chul han",
    "la sociedad del cansancio",
    17910,
    50,
    "libroNuevo.jpg",
    1,
  );
  insert.run(3, "julio cortázar", "rayuela", 30081, 10, "libroNuevo.jpg", 1);
}
// Query data
const query = db.prepare("SELECT * FROM libros");
console.log(query.all());
