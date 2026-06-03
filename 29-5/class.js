//class constructora
class Libro {
  constructor(id, autor, titulo, precio, stock, imagen) {
    ((this.id = id),
      (this.autor = autor),
      (this.titulo = titulo),
      (this.precio = precio),
      //cantidad
      (this.stock = stock),
      (this.imagen = imagen),
      (this.cantidad = 1));
  }
  //que actualiza sumando o considerando el valor
  actualizarStock() {
    let stockAct = Number(
      prompt(`Ingrese la cantidad de stock que desea sumar `),
    );
    //validar si me da stock absoluto negativo
    this.stock = this.stock + stockAct;
  }
  sumarUnidad() {
    if (this.cantidad < this.stock) {
      this.cantidad++;
    }
  }
  restarUnidad() {
    if (this.cantidad > 1) {
      this.cantidad = this.cantidad - 1;
    }
  }
}

//Instanciación de objetos
const libro1 = new Libro(
  1,
  "Jorge Luis Borges",
  "Aleph",
  800,
  10,
  "AlephBorges.jpg",
);
const libro2 = new Libro(
  2,
  "Gabriel García Marquez",
  "Cien años de Soledad",
  4500,
  8,
  "CienSoledadMarquez.jpg",
);
const libro3 = new Libro(
  3,
  "Isabel Allende",
  "Paula",
  2800,
  7,
  "PaulaAllende.jpg",
);
const libro4 = new Libro(
  4,
  "Jorge Luis Borges",
  "Ficciones",
  1400,
  20,
  "FiccionesBorges.jpg",
);
const libro5 = new Libro(
  5,
  "Mario Benedetti",
  "Andamios",
  2200,
  12,
  "AndamiosBenedetti.jpg",
);
const libro6 = new Libro(
  6,
  "Mario Vargas Llosa",
  "La ciudad y los perros",
  2800,
  2,
  "CiudadPerrosVargasLLosa.jpg",
);
//ARRAY ES MI STOCK
let biblioteca = [];

//EVALUAR SI EXISTE ALGO EN EL STORAGE CON LA CLAVE BIBLIOTECA
if (localStorage.getItem("biblioteca")) {
  console.log("Entro y hay algo en el storage");
  //al array biblioteca, asignarle
  //que tengo que hacer?? volver a pasarle la class a todos los elementos de este array:
  biblioteca = JSON.parse(localStorage.getItem("biblioteca"));
  if (biblioteca === null) {
    biblioteca = [];
  }
  let newBiblioteca = [];
  biblioteca.forEach((element) => {
    let newElement = new Libro(
      element.id,
      element.autor,
      element.titulo,
      element.precio,
      element.stock,
      element.imagen,
    );
    newBiblioteca.push(newElement);
  });
  if (newBiblioteca != []) {
    biblioteca = newBiblioteca;
  }
  console.log(biblioteca);
} else {
  //tanto si es false o si es null ENTRA A ELSE
  //Si esntra aca quiere decir que la clave del storage está y por lo tanto no existe stock
  //entre por prmera vez a mi sitio
  console.log("Entro por primera vez");
  //SI ENTRA POR PRIMERA VEZ, LO SETEO CON LOS LIBROS ORIGINALES
  biblioteca.push(libro1, libro2, libro6, libro4, libro3, libro5);
  //creo la clave biblioteca en el storage POR PRIMERA VEZ
  localStorage.setItem("biblioteca", JSON.stringify(biblioteca));
}
//localStorage.setItem("biblioteca", JSON.stringify(biblioteca))
console.log(biblioteca);
//ARRAY ES MI CARRITO

let carrito = []
carrito = JSON.parse(localStorage.getItem("carrito"));
if (carrito === null) {
  carrito = [];
}
let newCarrito = [];
carrito.forEach((element) => {
  let newElement = new Libro(
    element.id,
    element.autor,
    element.titulo,
    element.precio,
    element.stock,
    element.imagen,
  );
  newElement.cantidad=element.cantidad
  newCarrito.push(newElement);
});
if (newCarrito != []) {
  carrito = newCarrito;
}

