let cantidad = Number(prompt("ingrese cuantas notas")),
total=0,i=1
while(cantidad<=0||isNaN(cantidad)){
    cantidad=Number(prompt("ingrese cuantas notas. numero positivo."))
}
for(;i<=cantidad;i++){
    let nota = Number(prompt(`nota ${i}`))
    while(nota>10||nota<1||isNaN(nota)){
        
        nota=Number(prompt(`ingrese la nota n°${i}. nota ingresada incorrectamente`))
    }
    total+=nota
}
let promedio=total/cantidad
console.log(`tu total es ${total} y tu promedio es ${promedio}`)
