let boolean = true;
boolean ? "true" : "false";

//let total = carrito.reduce((acc, item) => acc + item.precio, 0);
/*array.reduce((accumulator, currentValue, currentIndex, array) => {
  // Logic here
}, initialValue);
*/
function querySelector(selector) {
    return document.querySelector(selector);
}
let argentina = querySelector("#argentina")
let brasil = querySelector("#brasil")
let uruguay = querySelector("#uruguay")
let chile = querySelector("#chile")
argentina.innerText = "Argentina";
brasil.innerText = "Brasil";
uruguay.innerText = "Uruguay";
chile.innerText = "Chile";
console.log(argentina)
console.log(brasil)
console.log(uruguay)
console.log(chile)
let paises = document.querySelectorAll("li")
for (const element of paises) {
    if(element.innerText === "Argentina") {
        element.innerText = "blue";
    }
}
let elemento = document.getElementById("argentina")
elemento.innerText = "Argentina";
let elementos = document.getElementsByClassName("pais")
let array = document.getElementsByTagName("li") 