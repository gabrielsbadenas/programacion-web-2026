/*

*/
let edad = 24
if(edad >= 18){
    console.log('podes comprar alcohol')
    //sintaxis es la forma de escribir bien
} else {
    console.log('no podes comprar alcohol')
}
let color = "rojo"

if (color == "rojo") {
    
}else if (color == "amarillo") {
    
} else if (color == "azul") {
    
} else {
    
} 
let estrictamenteIgual = 5 === "5"
//compara tipo de dato y valor
let igualSimple = "5" == 5
//compara solo el valor
function notaValida(nota){
    if(1<nota<=10){
        return nota
    }
    alert("el numero debe ser entre 1 y 10")
}
let nota1 = Number(prompt("ingrese la primer nota"))
let nota2= Number(prompt("ingrese la segunda nota"))
let nota3 = Number(prompt("ingrese la tercer nota"))
let total = nota1+nota2+nota3
let promedio = total/3
if(promedio===10){
    alert("usted tiene nota de honor")
}else if (promedio>=7){
    alert("usted está promocionado")
}else if(promedio>=4){
    alert("usted está aprobado")
}else if(1<=promedio<4){
    alert("usted está desaprobado")
}else{
    alert("nota no valida")
}