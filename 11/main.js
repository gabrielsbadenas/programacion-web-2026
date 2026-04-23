//no dejar que se agreguen dos productos con el mismo id
//indispensable
class Carta{
    constructor(id,elixir,nombre,nivel,rareza){
        this.id=id
        this.elixir=elixir
        this.nombre=nombre
        this.nivel=nivel
        this.rareza=rareza
        this.stock=20
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
    new Carta(1,3,"princesa",15,"legendaria"),
    new Carta(2,3,"caballero",14,"comun"),
    new Carta(3,3,"goblin gang",14,"comun"),
    new Carta(4,3,"skeleton army",14,"epica"),
    new Carta(5,5,"inferno tower",14,"rara"),
    new Carta(6,6,"rocket",14,"rara"),
    new Carta(7,3,"goblin barrel",14,"epica"),
]
deck.push(new Carta(8,3,"arrows",15,"comun"))

function add2deck(cartas){
    let nombre = prompt("ingresa el nombre de la carta")
    let elixir = Number(prompt("ingresa cuanto elixir tiene"))
    let nivel = Number(prompt("ingresa que nivel tiene"))
    let rareza = prompt("ingresa la rareza que tiene")
    let id = cartas.length + 1
    let carta = new Carta(id,elixir,nombre,nivel,rareza)
    cartas.push(carta)
    return carta
}

function mostrarCatalogo(catalogo){
    for (const element of catalogo) {
        console.log(element)
    }
}

function menuInteractivo(){
    let seguir=true
    do{
        let opcion = prompt(`
            opcion1: mostrar catalogo,
            opcion2: agregar carta a mazo,
            opcion3: buscar por nombre,
            opcion 4: buscar por elixir,
            opcion 5: buscar por rareza,
            opcion 6: subir de nivel,
            opcion 7: eliminar por id,
            opcion 8: buscar por rareza o nombre,
            opcion 9: ordenar por elixir,
            opcion 10: ordenar por nombre,
            opcion 11: agregar al carrito,
            opcion 12: calcular el total del carrito,
            opcion 13: finalizar compra,
            opcion0: cerrar
            `)
    switch(opcion){
        case "1":
            mostrarCatalogo(deck)
        break
        case "2":
            add2deck(deck)
        break
        case "3":
            buscarPorNombre(deck)
        break
        case "4":
            buscarPorElixir(deck)
        break
        case "5":
            buscarPorRareza(deck)
        break
        case "6":
            actualizarNivel(deck)
        break
        case "7":
            eliminarPorID(deck)
        break
        case "8":
            buscarPorRarezaOnombre(deck)
        break
        case "9":
            ordenarPorElixir(deck)
        break
        case "10":
            ordenarPorNombre(deck)
        break
        case "11":
            agregarAlCarrito(carrito)
        break
        case "12":
            calcularTotal(carrito)
        break
        case "13":
            carrito=finalizarCompra(carrito)
            console.log(carrito)
        break
        case "0":
            seguir=false
        break
    }
}while(seguir)
}
menuInteractivo()
//deseable
function buscarPorNombre(cartas){
    const nombre = prompt("ingrese el nombre a buscar")
    const encontrado = cartas.find(elemento=>elemento.nombre===nombre)
    console.log(encontrado)
    return encontrado
}
function buscarPorElixir(cartas){
    const elixir = Number(prompt("ingrese la cantidad de elixir"))
    const lista = cartas.filter(elemento=>elemento.elixir===elixir)
    console.log(lista)
    mostrarCatalogo(lista)
    return lista
}
function buscarPorRareza(cartas){
    const rareza = prompt("ingrese la rareza")
    const lista = cartas.filter(elemento=>elemento.rareza===rareza)
    console.log(lista)
    mostrarCatalogo(lista)
    return lista
}
function eliminarPorID(array){
    mostrarCatalogo(array);
    let idEliminar = parseInt(prompt("ingrese el id de la carta a eliminar"));
    let cartaEliminada = array.find(carta=>carta.id === idEliminar)
    if(cartaEliminada==undefined){
        console.log("No se encontró una carta con ese id");
        return undefined
    }
    let indice = array.indexOf(cartaEliminada)
    array.splice(indice,1);
    return cartaEliminada
}

function buscarPorRarezaOnombre(deck){
    const rareza = prompt("ingrese la rareza")
    const nombre = prompt("ingrese el nombre")
    const cartaEncontrada = deck.find((carta) => 
        {return carta.rareza.toLowerCase().includes(rareza.toLowerCase()) || 
            carta.nombre.toLowerCase().includes(nombre.toLowerCase());});
    return cartaEncontrada;
}

//desafios
function actualizarNivel(cartas){
    mostrarCatalogo(cartas)
    const id = Number(prompt("ingrese el id de la carta a modificar"))
    let carta = cartas.find(carta=>carta.id === id)
    carta.levelUp()
    mostrarCatalogo(cartas)
}

function ordenarPorElixir(cartas){
    cartas.sort((a,b)=>a.elixir-b.elixir)
    mostrarCatalogo(cartas)
}

function ordenarPorNombre(cartas){
    let ordenadoAZ=cartas.toSorted((a,b) => {
        const nameA = a.nombre.toUpperCase(); // ignore upper and lowercase
        const nameB = b.nombre.toUpperCase(); // ignore upper and lowercase
        if(nameA < nameB) return -1;
        if(nameA > nameB) return 1;
        return 0;
    });
    console.log(ordenadoAZ)
}

function agregarAlCarrito(carrito){
    //validar con some que no haya cartas con ese id
    mostrarCatalogo(deck)
    let current = 1
    while(current!=0){
        current=Number(prompt("cual id de carta desea agregar al carrito? pulse 0 para salir"))
        let cartaElegida=deck.find(carta=>carta.id==current)
        if (cartaElegida==undefined){
            console.log("no hay ninguna carta con ese id")
        }else{
            carrito.push(cartaElegida)
        }
    }
    return carrito
}

function calcularTotal(carrito){
    let total = 0
    for (const element of carrito) {
        total+=element.elixir
    }
    console.log("esa jugada sale",total,"elixir")
    return total
}

function finalizarCompra(arrayCarrito){
    if(arrayCarrito.length>=1){
        let precioFinal = calcularTotal(arrayCarrito)
        console.log(`el total gastado es ${precioFinal}`)
        arrayCarrito=[]
        return arrayCarrito
        
    }else{
        console.log("no hay cartas en tu compra")
    }
}
//clase 12
function buscarPorIdNombre(array){
    let valorEliminar = prompt("ingrese el id o nombre de la carta que desea")
    while(valorEliminar.trim().length==0){
        valorEliminar=prompt("ingreso vacio o incorrecto. ingrese el id o nombre de la carta que desea")
    }
    //dejo los nombres de variable tal cual porque es solo interno
    let libroEliminar=array.find(book=>book.id==valorEliminar||book.nombre.toUpperCase()==valorEliminar.toUpperCase())
    return libroEliminar
}
function eliminarLibroCarrito(arrayCarrito){
    mostrarCarrito(arrayCarrito)
    let elementocarritoeliminar=buscarPorIdNombre(arrayCarrito)
    if(elementocarritoeliminar==undefined){
        console.log("la carta seleccionada no existe en el carrito")
    }
    else{
        let index=arrayCarrito.indexOf(elementocarritoeliminar)
        arrayCarrito.splice(index,1)
        mostrarCarrito(arrayCarrito)
    }
}
function actualizarAlgo(arrayStock){
    let elementoActualizar = buscarPorIdNombre(arrayStock)
    if(elementoActualizar==undefined){
        console.log("esa carta no existe")
    }else{
        let atributoActualizar = prompt("ingrese el atributo que desea modificar")
        for(let prop in elementoActualizar){
            console.log(prop)
            console.log(elementoActualizar[prop])
            if (prop==atributoActualizar){
                let nuevoValor=Number(prompt(`ingrese un nuevo valor en ${prop}`))
                elementoActualizar[prop]=nuevoValor
                console.log(elementoActualizar[prop])
            }
        }
        console.log(elementoActualizar)
    }
}
function actualizarStock(){
    let stockAct=Number(prompt("ingrese la cantidad de stock que desea sumar"))
    this.stock=this.stock+stockAct
}