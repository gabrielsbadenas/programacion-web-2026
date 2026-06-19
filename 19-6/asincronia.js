//JS por default es un lenguaje de single thread o un solo hilo

console.log("Principio del programa")
//setTimeout
//es una function que permite indicar el "tiempo" de cuando voy a ejecutar ciertas líneas de código
//se ejecuta una sola vez set Time out
//dos parametros: función y el segundo tiempo en milisegundos
setTimeout(function(){
    console.log("Ejecucción del programa")
    
}, 0)

console.log("Fin del programa")

// let timer = 0
// for(let letra of "Bienvenidos al CFP n° 41"){
//     //un setTimeout que pueda ir imprimiendo cada letra con un espacio de tiempo
//     timer += 500
//     setTimeout(function(){
//         console.log(letra)

//     }, timer)
// }

//setInterval : tamb tiene dos parametros pero el tiempo que le paso dice cada cuanto se ejecuta
// let num = 0
// let intervalo = setInterval(function(){
//     console.log(num)
//     num++
//     if(num == 20){
//         clearInterval(intervalo)
//     }
// },500)

//hagan una cuenta regresiva que cuando llegue a cero te avise que perdiste y limpie el intervalo
let numero =10
let cuentaRegresiva = setInterval(function(){
    console.log(numero)
    numero--
    if(numero == 0){
        clearInterval(cuentaRegresiva)
        console.log("EXPLOTO TODO💣")
    }
},700)