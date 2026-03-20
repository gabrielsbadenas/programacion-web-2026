let edad = 100
function drinkingAge(edad){
    //solo existe en este bloque de codigo
    let edadMinima=18
    if (edad>=edadMinima){
        console.log("usted tiene edad para comprar bebidas")
    }else{
        console.log("no tiene edad para comprar")
    }
}
drinkingAge(edad)
drinkingAge(19)
function pedirEdad(){
    let edadIngresada = Number(prompt("ingrese su edad"))
    drinkingAge(edadIngresada)
}
pedirEdad()



function pedirDatos(){
    let prop1=prompt("ingrese la primera propiedad")
    let prop2=prompt("ingrese la segunda propiedad")
    let prop3=prompt("ingrese la tercer propiedad")
    propiedades(prop1,prop2,prop3)
}
function propiedades (prop1,prop2,prop3){
    let msg = `la primera propiedad es ${prop1}, la segunda es ${prop2} y la tercera es ${prop3}`
    console.log(msg)
}
pedirDatos()
//retornables
function pedirNumero(){
    let numero=Number(prompt("ingrese el numero"))
    return numero
}
function sumar(num1,num2)
{
    let resultado=num1+num2
    console.log("la suma de esto es ",resultado)
}
let primerIngreso=pedirNumero()
console.log(primerIngreso)
let segundoIngreso=pedirNumero()
sumar(primerIngreso,segundoIngreso)

