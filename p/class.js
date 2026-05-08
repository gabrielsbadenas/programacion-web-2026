
//class constructora
class Libro{
    constructor(id, autor, titulo, precio, stock, imagen){
        this.id = id,
        this.autor = autor,
        this.titulo = titulo,
        this.precio = precio,
        //cantidad 
        this.stock = stock,
        this.imagen = imagen
    }
    //métodos para la class
    mostrarInfoLibro(){
        console.log(`El libro fue escrito por ${this.autor} su título es ${this.titulo} y su precio es ${this.precio}`)
    }
    mostrarLibroCatalogo(){
        console.log(this.id, this.titulo, this.autor, this.precio, this.stock)
    }
    mostrarLibroCarrito(){
        console.log(this.id, this.titulo, this.precio)
    }
    actualizarPrecio(){
        let nuevoPrecio = Number(prompt(`Ingrese el nuevo precio del libro ${this.titulo} que actualmente vale ${this.precio}`))
        if(isNaN(nuevoPrecio) || nuevoPrecio < 1){
            console.log(`INGRESO INCORRECTO. ${nuevoPrecio} no es un número positivo. El precio del libro ${this.titulo} sigue siendo ${this.precio}`)
        }else{
            this.precio = nuevoPrecio
            console.log(`El libro ${this.titulo} de ${this.autor} ahora tiene por precio ${this.precio}`)
        }
    }
    //que actualiza sumando o considerando el valor
    actualizarStock(){
        let stockAct = Number(prompt(`Ingrese la cantidad de stock que desea sumar `))
        //validar si me da stock absoluto negativo
        this.stock = this.stock + stockAct
        
    }
}

//Instanciación de objetos
const libro1 = new Libro(1,"Jorge Luis Borges", "Aleph", 800, 10, "AlephBorges.jpg")
const libro2 = new Libro(2,"Gabriel García Marquez", "Cien años de Soledad", 4500, 8, "CienSoledadMarquez.jpg")
const libro3 = new Libro(3,"Isabel Allende", "Paula", 2800, 7, "PaulaAllende.jpg")
const libro4 = new Libro(4,"Jorge Luis Borges","Ficciones", 1400,20, "FiccionesBorges.jpg")
const libro5 = new Libro(5,"Mario Benedetti", "Andamios", 2200,12, "AndamiosBenedetti.jpg")
const libro6 = new Libro(6,"Mario Vargas Llosa", "La ciudad y los perros", 2800, 2, "CiudadPerrosVargasLLosa.jpg")
//ARRAY ES MI STOCK
let biblioteca = []
biblioteca.push(libro1, libro2,libro6, libro4,libro3,libro5)
console.log(biblioteca)
//ARRAY ES MI CARRITO
let carrito = []

