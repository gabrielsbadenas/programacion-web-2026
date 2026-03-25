//objetos
const IVA = 21
function ingresarLibro(){
    let titulo=prompt("Ingrese el titulo del libro")
    let autor=prompt("Ingrese el autor del libro")
    let precio=prompt("Ingrese el precio del libro")
    mostrarLibros(titulo,autor,precio)
}
function mostrarLibros(titulo,autor,precio){
    console.log(`El libro ${titulo} del autor ${autor} tiene un precio de ${precio}`)
    alert(`El libro ${titulo} del autor ${autor} tiene un precio de ${precio}`)
}

function calcularIVA(precio){
   // return precio * 0.19;
   let montoIVA=(precio/100)*IVA
   console.log(`respecto del monto ${precio}, el iva agregado es de ${montoIVA}`)
}

ingresarLibro()

//objetos: tiene atributos/propios y metodos (funciones que solo aplican a ese objeto )
//objeto literal
let libroAleph={
    tituloAl:"aleph",
    autorAl:"borges",
    precioAl:777
}
console.log(libroAleph)
const libro={
    autor:"gabriel",
    titulo:"aprender js",
    precio:500,
    editorial:"cfp41"
}
console.log(libro)
//como accedo a los objetos:
//si quiero acceder al titulo de cada libro
console.log(libroAleph.tituloAl)
console.log(libro["titulo"])
let card = {
suit: "hearts",
rank: "two",
seal:"red",
polychrome:true
}
console.log(card)

//declarar objetos con una funcion constructora
//nos permite crear objetos con las mismas propiedades y metodos
function ObraLiteraria(tituloI,autorI,precio){
    this.titulo=tituloI,
    this.precio=precio,
    this.autor=autorI
    //metodos son funciones con dominio restringido
    this.mostrarDatosLibro(){
        console.log(`El libro ${this.titulo} del autor ${this.autor} tiene un precio de ${this.precio}`)
    }
}
//instanciar un objeto: llamar a la funcion constructora y darle valores
//utilizar la palabra reservada "new"
let obra1 = new ObraLiteraria("aleph obra literaria","jorge luis borges",3000)
