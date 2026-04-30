//si las clases tienen varias palabras se pueden separar por espacio e incluyen la primera palabra
let comidas = document.querySelector("#comidas")
let comida = document.querySelectorAll(".comida");

for (const element of comida) {
    if(element.innerText === "jjigae") {
        element.innerText = "kimchi jjigae";
    }
}

let jjigae = document.getElementById("jjigae")
jjigae.innerText="budae jjigae"

let newFood = document.createElement("li")
newFood.innerText = "soondubu jjigae"
newFood.id = "soondubu"
newFood.classList.add("comida")
comidas.appendChild(newFood)

let kimchi = document.getElementById("kimchi")
kimchi.remove()
//.remove() //elimina el elemento pero no las listas
let newOne = document.createElement("li")
newOne.innerText = "galbi"
newOne.id = "galbi"
newOne.classList.add("comida")
comidas.appendChild(newOne)