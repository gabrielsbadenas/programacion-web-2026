let mysql = require("mysql");
let conexion = mysql.createConnection({
  host: "localhost",
  database: "servicios",
  user: "root",
  password: "",
});
conexion.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("conexion exitosa");
    //conexion.end();
  }
});
//conexion.end();
const categorias = "SELECT * FROM categoria";

conexion.query(categorias, function (error, lista) {
    if(error){
        throw error
    }else{
        console.log(lista[0].nombre.length)
    }
});
const nuevoregistro = "insert into categoria {cod_categorias,nombres_categoria,imagenes} values {NULL,'reparador de estufas','estufa.jpg'}"
conexion.query(nuevoregistro,function(error,rows){
    if(error){
        throw error
    }else{
        console.log("datos insertados correctamente")
    }
})