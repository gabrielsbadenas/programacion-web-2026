class Carta{
    constructor(id,elixir,nombre,nivel,rareza,imagen,stock=20){
        this.id=id
        this.elixir=elixir
        this.nombre=nombre
        this.nivel=nivel
        this.rareza=rareza
        this.imagen=imagen
        this.stock=stock
    }
    levelUp(){
        this.nivel++
    }
    actualizarStock(){
        let stockAct=Number(prompt("ingrese la cantidad de stock que desea sumar"))
        this.stock=this.stock+stockAct
    }
}

let carrito = []
const deck = [
    new Carta(1,3,"princesa",15,"legendaria","princesa.png"),
    new Carta(2,3,"caballero",14,"comun","caballero.png"),
    new Carta(3,3,"goblin gang",14,"comun","gang.png"),
    new Carta(4,3,"skeleton army",14,"epica","skeletons.png"),
    new Carta(5,5,"inferno tower",14,"rara","tower.png"),
    new Carta(6,6,"rocket",14,"rara","rocket.png"),
    new Carta(7,3,"goblin barrel",14,"epica","barrel.png"),
]

deck.push(new Carta(8,3,"arrows",15,"comun","arrows.png"))

function imprimirCatalogo(array){
    let container = document.createElement("div")
    let body = document.querySelector("body")
    container.className="row"
    array.forEach(element => {
        let nuevoDiv = document.createElement("div")
        nuevoDiv.className = "mx-auto my-2 col-12 col-md-6 col-lg-4 col-xl-3"
        nuevoDiv.innerHTML = `
<div id="${element.id}" class="card" style="width: 18rem;">
  <img src="../img/${element.imagen}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.nombre}</h5>
    <p class="card-text">${element.rareza}</p>
    <a href="#" class="btn btn-primary">${element.elixir} elixir</a>
  </div>
</div>
`
        container.append(nuevoDiv)
    });
    body.append(container)
}
imprimirCatalogo(deck)