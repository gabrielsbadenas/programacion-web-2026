console.log("principio del programa");
//nos permite que algo trde en ejecutarse
setTimeout(function () {
  console.log("ejecucion del programa");
}, 0);
console.log("final del programa");
let numero1 = 1;
let intervalo1 = setInterval(function () {
  console.log(numero1);
  numero1++;
  if (numero == 20) clearInterval(intervalo1);
}, 1000);
let numero = 1000;
let intervalo = setInterval(function () {
  console.log(numero);
  numero--;
  if (numero == 0) {
    console.log("perdiste");
    clearInterval(intervalo);
  }
}, 1000);
