let array = ['https://thereal23.github.io/590295810358705700000/']
for (let index = 0; index < 100; index++) {
    array.push(2**index)
}
let button=document.querySelector("#evento-semantico")
let container = document.querySelector("#container")

button.innerHTML="hola"
button.ondblclick=()=>{
    //handler event o funcion manejadora

    button.innerHTML=""
}
button.onclick=function(){
    console.log("haz hecho click")
}
button.addEventListener("mouseover",()=>{
    console.log("over")
})
array.forEach(element => {
    let elemento = document.createElement("div")
    elemento.innerHTML=element
    container.append(elemento)
});