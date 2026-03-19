let cerrarMenu=false
do{
    let opcion=prompt(`ingrese la opcion que desea: 1-hola
        2-felicitar
        3-salir del menu`)
    switch(opcion){
        case "0":
            console.log("gracias por usar mi app")
            cerrarMenu=true
        break
        case "1":
            calcularCuadrado()
        break
        case "2":
            console.log("felicitar")
        break
        default:
            console.log("opcion no valida")
        break
    }
}while(cerrarMenu==false)

function calcularCuadrado(){
    let lado= prompt("ingrese el lado de un cuadrado")
    while(lado<=0||isNaN(lado)){
        lado=prompt("ingrese el lado del cuadrado. numero positivo")
    }
    let perimetro=lado*4
    let area=lado*lado
    alert("El perimetro del cuadrado es: "+perimetro)
    alert("El area del cuadrado es: "+area)
}

function ejercicio8(){
    let valor=prompt("ingrese el valor")
    let cantidad=prompt("ingrese la cantidad de horas")
    let monto=valor*cantidad
    let anual=monto*12
    alert(`vas a cobrar ${monto} este mes y ${anual} a lo largo del año`)
}
//ej 9 Realizar un sistema para sueldos de una empresa. Se le solicita que nombre y apellido de la persona, junto al valor de la hora, la cantidad de horas trabajadas en el mes y los años de antigüedad en la empresa. Realice el algoritmo para calcular e informar el sueldo mensual del empleado/a, teniendo en cuenta que se le asigna un bono mensual de 5% del sueldo por año cada año de antigüedad (por 1 año de antigüedad plus de 5%, 2 años plus de 10%, 3 años plus de 15%... etc)
let valorHora=np("ingrese el valor de la hora")
let cantidadHoras=np("ingrese la cantidad de horas trabajadas en el mes")
let añosAntiguedad=np("ingrese los años de antiguedad")
let bono=añosAntiguedad*0.05
let sueldoMensual=(valorHora*cantidadHoras)
let sueldoTotal=sueldoMensual+(sueldoMensual*bono)
function np(msg){
    Number(prompt(msg))
}