localStorage.setItem("nombre",JSON.stringify("gabriel"))
let gabriel = localStorage.getItem("nombre")
localStorage.removeItem("nombre")
localStorage.clear()
let string = JSON.stringify({
    nombre:"Gabriel"
})
localStorage.setItem("objeto",string)
let objeto = JSON.parse(localStorage.getItem("objeto"))

let prueba = localStorage.getItem("biblioteca")//null
if(prueba){
    //hay algo en prueba
}else{
    //no hay nada
}