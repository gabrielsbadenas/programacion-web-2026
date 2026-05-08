//FUNCION que reccorre el array e imprime en eldom todos mis libros

//capturas del DOM
let containerLibros = document.getElementById("containerLibros")
let titulo = document.getElementById("tituloPrincipal")
let buscador = document.getElementById("buscador")
console.log(buscador)
let selectOrden = document.getElementById("selectOrden")
console.log(selectOrden)
//muestra de ejemplo
titulo.innerText = "Mis libros🥸"
//funciones

function imprimirCatalogo(array){
    containerLibros.innerHTML = ""
    array.forEach((libro)=>{
        //objetivo del forEach imprimir cada uno de mis libros:
        //creo un div para cada uno de mis libros
        let libroNuevoDiv = document.createElement("div")
        //agregarle una class al nodo
        libroNuevoDiv.className = "mx-auto my-2 col-12 col-md-6 col-lg-4 col-xl-3 "
        //a ese div le adjunto el esqueleto de la card
        libroNuevoDiv.innerHTML = `
        <div id="${libro.id}" class="card" style="width: 18rem;">
            <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${libro.imagen}" alt="${libro.titulo} de ${libro.autor} ">
            <div class="card-body">
                <h4 class="card-title">${libro.titulo} </h4>
                <p>Autor: ${libro.autor}</p>
                <p class="precio">Precio: $${libro.precio}</p>
                <p class="stock">Stock: ${libro.stock}</p>
            <button class="btn btn-success" id=""data-bs-toggle="tooltip" data-bs-placement="left">Agregar al carrito</button>
            </div>
        </div>  `
        console.log(libroNuevoDiv)
        //adjuntar al container este div creado
        containerLibros.append(libroNuevoDiv)
    })
}
function filtrarPorTituloYAutor(valorBuscar, array){
    const texto = valorBuscar.trim().toLowerCase()
    if(!texto) return array.slice()

    return array.filter((elem)=>
        elem.titulo.toLowerCase().includes(texto) ||
        elem.autor.toLowerCase().includes(texto)
    )
}

function ordenarArray(array, opcion){
    const ordenado = array.slice()

    switch(opcion){
        case "1":
            return ordenado.sort((a, b)=> b.precio - a.precio)
        case "2":
            return ordenado.sort((a, b)=> a.precio - b.precio)
        case "3":
            return ordenado.sort((a, b)=> a.titulo.localeCompare(b.titulo))
        case "4":
            return ordenado.sort((a, b)=> b.titulo.localeCompare(a.titulo))
        default:
            return ordenado
    }
}

function actualizarCatalogo(){
    const textoBusqueda = buscador.value
    const resultadosFiltrados = filtrarPorTituloYAutor(textoBusqueda, biblioteca)
    const resultadosOrdenados = ordenarArray(resultadosFiltrados, selectOrden.value)

    if(resultadosOrdenados.length === 0){
        containerLibros.innerHTML = `
            <div class="col-12 text-center mt-4">
                <p class="text-warning">No hay resultados para "${textoBusqueda}"</p>
            </div>`
        return
    }

    imprimirCatalogo(resultadosOrdenados)
}

// llamado inicial
actualizarCatalogo()

// eventos
buscador.addEventListener("input", ()=>{
    console.log(`Se activo el evento: ${buscador.value}`)
    actualizarCatalogo()
})
selectOrden.addEventListener("change",()=>{
    console.log("El evento change está funcionando")
    console.log(`La opción elegida tiene valor ${selectOrden.value}`)
    actualizarCatalogo()
})
