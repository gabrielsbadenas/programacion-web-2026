let mysql = require("promise-mysql"),
  conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "librosPlana",
  }),
  crearConexion = async () => await conexion;

module.exports = { crearConexion };
