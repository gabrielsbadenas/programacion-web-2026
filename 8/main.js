console.log("hello world")
//un array es un espacio de memoria que accedo a sus elementos por su posicion o indice
let array=[]
console.log(array)
//los metodos array son funciones propias de los arrays que ya vienen por defecto
//push agrega un elemento al final del array

//array de numeros
let numeros=[1,2,3,4,5]
console.log(numeros)

//array de strings
//si pongo dos comas seguidas me pone un empty
let arrayString=["nube",,"mate","lluvia","humedad"]
console.log(arrayString)

//array de varios tipos
let arrayVarios=[1,"nube",true,3.14]
console.log(arrayVarios)

//propiedad
console.log(numeros.length) 
//length es una propiedad que me dice la cantidad de elementos que tiene el array

let arrayRandom = [numeros,{autor:"borges"},true,arrayVarios,88,"hola"]
for(let i=0;i<numeros.length;i++){
    console.log(numeros[i]*2)
}
//for of es un bucle que me permite recorrer los elementos de un array sin necesidad de usar un indice
for (const element of numeros) {
    console.log(element)
}
//metodos de arrays son metodos que solo le puedo aplicar a los arrays que hacen una tarea puntual
//agregar elementos:
//push agrega un elemento al final del array
numeros.push(6)
//se pueden sumar mas elementos si se separan con comas
numeros.push(7,8,9)
console.log(numeros)
//unshift agrega un elemento al principio del array
numeros.unshift(0)
console.log(numeros)
//pop elimina elementos al final y shift al principio

numeros.pop()
console.log(numeros)
numeros.shift()
console.log(numeros)

//los metodos simples no utilizan funciones como parametro, solo valores

//join es un metodo que me permite unir los elementos de un array en un string, separandolos por el valor que le pase como parametro
//devuelve un string
console.log(numeros.join("-"))

//concat me permite concatenar dos arrays
let gatos=["michi","gato","peludo"]
let perros=["firulais","perro","peludo"]
let animales=gatos.concat(perros)
console.log(animales)

numeros = [25,98,33,31,87,99,505]
//agregar despues del 33 la palabra "almacen" y eliminar el 31,87 y el 99
//splice me permite agregar o eliminar elementos de un array en una posicion determinada
//el primer parametro es la posicion donde quiero empezar a modificar el array, el segundo parametro es la cantidad de elementos que quiero eliminar, y los siguientes parametros son los elementos que quiero agregar
numeros.splice(3,3,"almacen")
console.log(numeros)
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

//metodo busqueda se llama find que devuelve el primer elemento que cumpla con la condicion que le paso como parametro

//filter en cambio devuelve un array con todos los elementos que cumplan con la condicion que le paso como parametro
let librosBorges = biblioteca.filter((libro)=>{return libro.autor === "Borges"})
//libro => libro.autor === "Borges")

//hacer una con filter y una con find con la tarea