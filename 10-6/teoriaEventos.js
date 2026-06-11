//EVENTOS:
//Son los mecánimos que tenemos en JS para controlar acciones del usuario y definir el comportamiento del sitio
//handler event: son funciones manejadoras de eventos: funciones que se ejecutan cuando sucede el evento
//cómo puedo declarar una handler event: arrow, anónimas o tradicional

function saludarCFP(){
    alert(`Bienvenidos al CFP n° 41`)
}
function saludarPersona(nombre = "usuario"){
    alert(`Hola ${nombre}`)
}

//FORMA SEMANTICA: se utiliza el prefijo ON 
//Solo puedo declarar una function handler a cada tipo de evento
let botonSemantico = document.getElementById("evento-semantico")
console.log(botonSemantico)
let nombrePersona = document.querySelector("#nombrePersona")
let botonUno = document.getElementById("botonUno")
//ppasar evento de forma semantica
//cuando asigno una function a un evento es sin los ()
//problema no puedo asignarles una handler event con parámetro 
botonSemantico.ondblclick = function(){
    saludarPersona(nombrePersona.value)
    nombrePersona.value = ""
}
botonUno.onclick = ()=>{
    saludarPersona(nombrePersona.value)
}
botonUno.onmouseover = saludarCFP
//tercera forma multiple 
let btnMultiple = document.getElementById("evento-multiple")
//addEventListener("tipoEvento", handler event)
btnMultiple.addEventListener("dblclick", saludarCFP)
btnMultiple.addEventListener("mouseover", ()=>{
    console.log("Tocaste el btn multiple")
})
btnMultiple.addEventListener("click", function(){
    saludarPersona(nombrePersona.value)
    nombrePersona.value = "Chau"
})