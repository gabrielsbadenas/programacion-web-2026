
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

async function cargarLibrosJSON(){
  let resp = await fetch("libros.json")
  let librosData = await resp.json()
  //en librosData ya tengo disponible la petición
  console.log(librosData)
    for(let libro of librosData){
        let libroJSON = new Libro(libro.id, libro.autor, libro.titulo, libro.precio, libro.stock, libro.imagen)
        biblioteca.push(libroJSON)
    }
    
    
}
localStorage.clear()
//EVALUAR SI EXISTE ALGO EN EL STORAGE CON LA CLAVE BIBLIOTECA
if(localStorage.getItem("biblioteca")){
    console.log("Entro y hay algo en el storage -- DE BIBLIOTECA ")
    //al array biblioteca, asignarle 
    console.log(JSON.parse(localStorage.getItem("biblioteca")))
    //que tengo que hacer?? volver a pasarle la class a todos los elementos de este array:
    for(let elem of JSON.parse(localStorage.getItem("biblioteca"))){
        //YA LLEGUE A TENER DISPONIBLE CADA OBJETO/ELEMENTO
        //PASARLE LA CLASS Y CÖMO HAGO PARA LLENAR BIBLIOTECA
        //id, autor, titulo, precio, stock, imagen
        let libroConClass = new Libro(elem.id, elem.autor,elem.titulo, elem.precio, elem.stock,elem.imagen) 
        
        biblioteca.push(libroConClass)
    }
    console.log(biblioteca)
}else{
    //tanto si es false o si es null ENTRA A ELSE
    //Si esntra aca quiere decir que la clave del storage está y por lo tanto no existe stock
    //entre por prmera vez a mi sitio
    console.log("Entro por primera vez")
    //SI ENTRA POR PRIMERA VEZ, LO SETEO CON LOS LIBROS ORIGINALES
    cargarLibrosJSON()
    //creo la clave biblioteca en el storage POR PRIMERA VEZ
    localStorage.setItem("biblioteca", JSON.stringify(biblioteca))
}
//localStorage.setItem("biblioteca", JSON.stringify(biblioteca))

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

