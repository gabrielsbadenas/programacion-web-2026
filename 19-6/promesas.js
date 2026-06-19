// blog jon mircha
// https://jonmircha.com/javascript-asincrono

//Promesa es un evento futuro con resolución
//Tiene su momento de pendiente: puede resolverse "bien" o recharzarse
//estados posibles: pending, fullfielled y rejected 

//PRIMER PASO PROMESA : QUEDA PENDIENTE
const ejemploPromesa = ()=>{
    return new Promise(function(resolve, reject){

    })
}
console.log(ejemploPromesa())
//ESTOS DOS CONSOLE:LOG SON PARA VER EL ESTADO DE LA PROMISE
// const eventoFuturo = (valor)=>{
//     return new Promise((resolve, reject)=>{
//         if(valor == true){
//             resolve("Somos campeones 😊")
//         }else{
//             reject("No pudimos ser campeones")
//         }
//     })
// }
// console.log(eventoFuturo(true))
// console.log(eventoFuturo(false))
// console.log("El programa sigue ejecutandose")

//ESTE EVENTO FUTURO TIENE UN TIEMPO DE DEMORA; TODAVIA NO PUEDO ESPERAR A SU RESOLUCIÖN PARA TENER ELRESULTADO
const eventoFuturo = (valor)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(valor == true){
                resolve("Somos campeones 😊 y ganamos la cuarta copa")
            }else{
                reject("No pudimos ser campeones")
            }
        },2000)

    })
}
console.log(eventoFuturo(false))
//.then me trae el resultado cuando la promesa se cumple y el resultado es EL ARGUMENTO DE RESOLVE CUANDO LA PROMISE FUE DECLARADA
//.catch() me trae el resultado cuando la promesa fue rechazada y el resultado es el argumento del reject de la promise
//.finally la promesa deja de estar pendiente
eventoFuturo(false)
.then((rtaSatisfecha)=>{
    console.log(rtaSatisfecha)
    console.log("SE RESOLVIO EL BLOQUE DE CPODIGO QUE TARDABA")
})
.catch((rtaRechazada)=>{
    console.log(rtaRechazada)
})
.finally(()=>{
    console.log("la promise, ya no está pendiente. Se termino")
})


console.log("MI APLICACION SIGUE HACIENDO SUS, NO ES BLOQUEADA POR ESE RECURSO QUE REQUIERE UNA PROMESA")
console.log("sigue el código")

