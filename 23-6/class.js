
//class constructora
class Libro{
    constructor(id, autor, titulo, precio, stock, imagen){
        this.id = id,
        this.autor = autor,
        this.titulo = titulo,
        this.precio = precio,
        //cantidad 
        this.stock = stock,
        this.imagen = imagen,
        this.cantidad = 1
    }
    //que actualiza sumando o considerando el valor
    actualizarStock(){
        let stockAct = Number(prompt(`Ingrese la cantidad de stock que desea sumar `))
        //validar si me da stock absoluto negativo
        this.stock = this.stock + stockAct
        
    }
    sumarUnidad(){
        if(this.cantidad < this.stock){
            this.cantidad++
        } 
    }
    restarUnidad(){
        if(this.cantidad > 1){
            this.cantidad = this.cantidad - 1
        }
    }
}

//ARRAY ES MI STOCK
let biblioteca = []

async function cargarLibrosDB(){
  const storedBiblioteca = localStorage.getItem("biblioteca")
  if (storedBiblioteca){
    const parsed = JSON.parse(storedBiblioteca)
    biblioteca = parsed.map((elem) => new Libro(elem.id, elem.autor, elem.titulo, elem.precio, elem.stock, elem.imagen))
    return
  }

  const resp = await fetch("/api/libros")
  const librosData = await resp.json()
  biblioteca = librosData.map((libro) => new Libro(libro.id, libro.autor, libro.titulo, libro.precio, libro.stock, libro.imagen))
  localStorage.setItem("biblioteca", JSON.stringify(biblioteca))
}

//ARRAY ES MI CARRITO
let carrito = []
//quiero guardar en el storage el carrito y cada vez que exista algo almacenado en él, TRAERLO???
//voy a llamar a la key tmb del storage carrito
if(localStorage.getItem("carrito")){
    //QUIERE DECIR QUE EXISTEN COSAS EN EL CARRITO
    for(let book of  JSON.parse(localStorage.getItem("carrito"))){
        //RESOLVER EL TEMA DE LA CANTIDAD, cuando instancio el libro setea por defecto cantidad 1
        let bookConClass = new Libro(book.id, book.autor,book.titulo, book.precio, book.stock,book.imagen)
        carrito.push(bookConClass)
    }
}//NO HAY NADA EN EL CARRITO --NO HAGO NADA PORQUE CARRITO COMIENZA VACIO

