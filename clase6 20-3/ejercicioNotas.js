let cantNotas =np("Ingrese la cantidad de notas que desea cargar dele studiante")
validarNumero(cantNotas)
let totalNotas = 0
recorrerNotas(cantNotas)
let promedio = calcularPromedio(totalNotas,cantNotas)
mensajeFinal(totalNotas, promedio)

function mensajeFinal(totalNotas, promedio){
    console.log(`Tu total es ${totalNotas} y tu promedio es ${promedio}`)
    alert(`Tu total es ${totalNotas} y tu promedio es ${promedio}`)
}

function np(msg){
    return Number(prompt(msg))
}

function validarNumero(cantNotas){
    while(cantNotas <= 0 || isNaN(cantNotas)){
        cantNotas = np("Ingrese la cantidad de notas que desea cargar del  estudiante: QUE SEA UN NUMBER Y MAYOR A CERO")
    }
}

function recorrerNotas(cantNotas){
    for(let i = 1; i <= cantNotas; i++){
        sumarNota(i)
    }
}

function sumarNota(i){
    let nota = np(`Ingrese la nota n°${i}`)
    validarNota(nota,i)
    console.log(`La nota ${i} es ${nota}`)
    totalNotas += nota
}

function validarNota(nota,i){
    while(nota > 10 || nota < 1 || isNaN(nota)){
        nota = np(`Ingrese la nota n°${i}. NOTA INGRESADA INCORRECTAMENTE`)
    }
}

function calcularPromedio(totalNotas,cantNotas){
    let promedio = totalNotas/cantNotas
    return promedio
}