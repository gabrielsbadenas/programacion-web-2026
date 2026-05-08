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
function buscarTituloAutor(valorBuscar, array){
    
    let coincidencias = array.filter((elem)=> elem.titulo.toLowerCase().includes(valorBuscar.toLowerCase() )  ||  elem.autor.toLowerCase().includes(valorBuscar.toLowerCase()))

    if(coincidencias.length < 1){
        console.log(`Para ${valorBuscar} no hay coincidencias ni en el titulo ni en el autor`)
        //TENDRÏA QUE PNESAR QUE QUIERO MOSTRAR CUANDO NO HAY COINCIDENCIAS
    }
    imprimirCatalogo(coincidencias)
}

function ordenarMayorMenorPrecio(array){
    //copie  array original con método concat
    let clonBiblioteca = array.concat()
    clonBiblioteca.sort((elem1, elem2)=> elem2.precio - elem1.precio)
    imprimirCatalogo(clonBiblioteca)
}
function ordenarMenorMayorPrecio(array){
    let ordenadoMenorMayor = array.toSorted((a,b)=> a.precio - b.precio)
    imprimirCatalogo(ordenadoMenorMayor)
}
//llamado de functipons: 
imprimirCatalogo(biblioteca)


//eventos
buscador.addEventListener("input", ()=>{
    //pruebo si ese evento está pegando
    console.log(`Se activo el evento: ${buscador.value}`)
    buscarTituloAutor(buscador.value, biblioteca)
})
selectOrden.addEventListener("change",()=>{
    console.log("El evento change está funcionando")
    console.log(`La opción elegida tien valor ${selectOrden.value}`)
    switch(selectOrden.value){
        case "0":
            imprimirCatalogo(biblioteca)
        break
        case "1":
            ordenarMayorMenorPrecio(biblioteca)
        break
        case "2":
            ordenarMenorMayorPrecio(biblioteca)
        break
    }
})