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
function Carta(suit,rank,seal,polychrome){
    this.suit=suit,
    this.rank=rank,
    this.seal=seal,
    this.polychrome=polychrome
    this.addPolychrome = function(){
        this.polychrome=true
    }
    this.increaseRank = function(newRank){
        this.rank=newRank
    }
    this.changeSuit = function(newSuit){
        this.suit=newSuit
    }
    this.showCardInfo = function(){
        console.log(`La carta es ${this.rank} de ${this.suit}, con sello ${this.seal} y polícroma: ${this.polychrome}`)
    }
}
let card1 = new Carta("diamonds","three","blue",false)
//declarar objetos con una funcion constructora
//nos permite crear objetos con las mismas propiedades y metodos
function ObraLiteraria(tituloI,autorI,precio,id){
    this.titulo=tituloI
    this.precio=precio
    this.autor=autorI
    this.ISBN=id
    //metodos son funciones con dominio restringido
    this.mostrarDatosLibro = function(){
        console.log(`El libro ${this.titulo} del autor ${this.autor} tiene un precio de ${this.precio}`)
    }
}
//instanciar un objeto: llamar a la funcion constructora y darle valores
//utilizar la palabra reservada "new"
let obra1 = new ObraLiteraria("aleph obra literaria","jorge luis borges",3000)

class Joker{
    constructor(number,
        name,
        //chips,
        //mult,
        //modifiers,// Base,Foil(+50 Chips),Holographic(+10 Mult),Polychrome(X1.5 Mult),Negative(+1Jokerslot)
        cost,
        type,
        activation,
        unlockRequirement,
    ){
        this.number=number,//id
        this.name=name,
        //this.chips=chips,
        //this.mult=mult,
        //this.modifiers=modifiers,
        this.cost=cost,
        this.type=type,
        this.activation=activation,
        this.unlockRequirement=unlockRequirement
    }
    showJokerInfo(){
        console.log(`El joker ${this.name} tiene un costo de ${this.cost} chips, 
            es de tipo ${this.type}, se activa ${this.activation} y se desbloquea 
            con ${this.unlockRequirement}`)
    }
}
let instancia1 = new Joker(1,"Joker de la suerte",100,"Base","Al inicio de cada ronda","Ganar 10 rondas"),
instancia2 = new Joker(2,"Joker de la fortuna",150,"Foil","Al eliminar a un oponente","Ganar 20 rondas"),
instancia3 = new Joker(3,"Joker de la riqueza",200,"Holographic","Al recolectar 100 chips","Ganar 30 rondas"),
instancia4 = new Joker(4,"Joker de la abundancia",250,"Polychrome","Al recolectar 200 chips","Ganar 40 rondas"),
instancia5 = new Joker(5,"Joker de la prosperidad",300,"Negative","Al recolectar 500 chips","Ganar 50 rondas"),
instancia6 = new Joker(6,"Joker de la opulencia",350,"Base","Al recolectar 1000 chips","Ganar 100 rondas")
instancia1.showJokerInfo()
instancia2.showJokerInfo()
instancia3.showJokerInfo()
instancia4.showJokerInfo()
instancia5.showJokerInfo()
instancia6.showJokerInfo()
function cargarLibro(){
    let titulo=prompt("Ingrese el titulo del libro"),
    autor=prompt("Ingrese el autor del libro"),
    precio=Number(prompt("Ingrese el precio del libro"),
    id=Math.floor(Math.random()*1000000000000)),
    libroNuevo=new ObraLiteraria(titulo,autor,precio,id)
    libroNuevo.mostrarDatosLibro()
}
//una clase con al menos 3 o 4 atributos, uno de ellos tiene que ser id y con al menos un metodo. 
// instanciarlo al menos 6 veces.