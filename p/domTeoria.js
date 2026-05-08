//DOM document object model - cómo accedo desde JS al las etiquetas/nodos de mi html
//Dos formas de acceder al DOM: getElement - querySelector(comparte la sintaxis con CSS respecto de cómo accedo a los nodos)

//FORMA DE ACCEDER AL DOM por querySelector
//hay tres maneras: id, class y tag/etiqueta

//con console, muestro nodo por consola
console.log(document.querySelector("#Par"))

//capturo en una variable el nodo
let encabezado = document.querySelector("#titulo")
//puedo re asignar a ese nodo su texto
encabezado.innerText = "Mi titulo"
console.log(encabezado)

//querySelector solo captura el primer elemento - querySelectorAll -captura
let paises = document.querySelectorAll(".pais")
console.log(paises)

console.log(paises[4])
for(let elem of paises){
    console.log(elem)
    //dos iguales comparo
    if(elem.innerText == "Argentina" || elem.innerText == "Chile"){
        //un igual asigno
        elem.innerText = "CFP 41"
    }
}

let elementosLI = document.querySelectorAll("li")
console.log(elementosLI)

//SEGUNDA FORMA con getElement ->
//también hay tres: id, className y tag
//por id
let titulo = document.getElementById("titulo")
console.log(titulo)

//por class
let ciudades = document.getElementsByClassName("ciudad")
console.log(ciudades)

//etiquetas
let h3Etiq = document.getElementsByTagName("h3")
console.log(h3Etiq)

//innerText accedo y puedo modificar el texto del nodo

//cómo crear
//como eliminar
titulo.remove()

//ejercicios lista sobre comida: 
//a) Quiero primero captura toda la lista 
//b) capturar el nodo que es Milanesa y cambiar su texto por Milanesa carne
//c) capturen todos lo nos que tenga la class comida
console.log("Clase 29 de abril")

//capture por id la lista
let listaComidas = document.getElementById("comidas")
console.log(listaComidas)
//capture por id la milanesa
let milanesa = document.getElementById("mila")
console.log(milanesa)
milanesa.innerText = `Milanesa de carne`
//capture todos los elementos que tenga la class comida


//cómo puedo crear un nodo desde JS
let nuevaComida = document.createElement("li")
//le asigno un texto con innerText
nuevaComida.innerText = "Kimchi"
//le asigno un ID
nuevaComida.id = "Kim"
//le asigno una class
nuevaComida.classList = "comida coreana"
console.log(nuevaComida)

//adjuntar nodo a otro nodo append o appendChild
listaComidas.append(nuevaComida)


let comidas = document.getElementsByClassName("comida")
console.log(comidas)

let pastas = document.getElementsByClassName("pastas")
console.log(pastas)

//eliminar un nodo
milanesa.remove()
//acceder por posición, no lo recomeindo para eliminar 
comidas[0].remove()


//eliminar las papas fritas y agregar alguna comida que les guste
//captura la bondiola y asignarle una ID
