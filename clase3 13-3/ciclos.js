//dos tipos de ciclos: condicionales (while) y contados (for)
let cantidad = Number(prompt("ingrese cuantas notas")),total=0,i=1
for(;i<=cantidad;i++){
    let nota = Number(prompt(`nota ${i}`))
    total+=nota
}
let promedio=total/cantidad
console.log(`tu total es ${total} y tu promedio es ${promedio}`)

let adivinanza = false
do{
let respuesta=prompt("que tiene seis caras y 21 ojos?")
if (respuesta.toLowerCase()=="dado"){
    console.log("la respuesta es correcta")
    adivinanza=true
}
}while (adivinanza!=true)

    //poner que solo hay 3 intentos