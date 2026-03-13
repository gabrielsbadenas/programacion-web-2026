console.log("esto es un js")
        console.log("Hola mundo desde JavaScript!");
        
        function showAlert() {
            Swal.fire({
                title: 'Hello!',
                text: 'This is a SweetAlert2 example',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
const NUMEROCONSTANTE = 42;
let autor = "borges";
console.log(autor)            
autor = "garcia marquez"
console.log(autor) 
function sumar(a, b) {
    console.log(a + b);
}
//pedir tres numeros al usuario por prompt y sumarlos, para luego sacar el promedio
function consigna() {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let num3 = parseFloat(prompt("Ingrese el tercer número:"))
    let suma = num1 + num2 + num3,
    promedio = suma / 3;
    alert("suma:" + suma + ", promedio: " + promedio)
}
consigna()
let edad = 30;
let concatenar = `tu edad es ${edad} años, tu nombre es ${autor}`
//la consola es un lugar para ver lo que va sucediendo a medida que el programa se ejecuta, es una herramienta de depuración
//ejercicio: se le pide al usuario un monto inicial y se le pide un monto objetivo. calcular mediante el interes compuesto cuantos años tardaria a llegar al interes compuesto.
//ejercicio 2: pedir un numero del 1 al 1000. sacar la mitad de ese numero, el 7% y el cuadrado. mostrar los 3 numeros por separado
let msg = "ingrese el monto inicial"
let montoInicial= prompt(msg)
msg = "ingrese el monto objetivo"
let objetivo = prompt(msg)