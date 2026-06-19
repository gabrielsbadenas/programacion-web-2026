//storage. Lugar de almacenamiento dentro del browser/navegador
//notation JSON 
//localStorage queda permanente -- session dura mientras la pestaña este abierta

//setItem que me sirve para crear o actualizar algo de storage
localStorage.setItem("comidaFav", "milanesa")
localStorage.setItem("numeroFav", 7)
localStorage.setItem("bebidaFav", "agua")
//actualizar comidaFav por lasaña
localStorage.setItem("comidaFav", "lasaña")
//sessionStorage.setItem("bebidaFav", "agua")
//getItem que sirve para capturar u obtener algo de storage
let miNumero = localStorage.getItem("numeroFav")
console.log(miNumero)
let bebida = localStorage.getItem("bebidaFav")
console.log(bebida)
//removeItem me srive para eliminar algo del storage
localStorage.removeItem("bebidaFav")

//JSON Javascript Object notation -> todo es cadena de carateres
let libro = {
    titulo: "Aleph",
    autor: "Borges", 
    precio: 999
}
//enviar info que es un objeto al Storage
//enviamos un objeto como valor en el storage utilizar stringify para no perder la info
localStorage.setItem("libroFav", JSON.stringify(libro))
//cuando capturo una clave que su valor es un object para no perder la anatomia del object: utilizó PARSE con JSON 
let aleph = JSON.parse(localStorage.getItem("libroFav"))
console.log(aleph)
console.log(aleph.autor)
//clear que limpia todo el storage

//qué pasa si traigo una clave del storage que no existe:
let prueba = localStorage.getItem("comidaOdiada")
console.log(prueba)