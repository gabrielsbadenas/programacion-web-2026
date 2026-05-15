//FUNCION que reccorre el array e imprime en eldom todos mis libros

//capturas del DOM
let containerLibros = document.getElementById("containerLibros")
let titulo = document.getElementById("tituloPrincipal")
let buscador = document.getElementById("buscador")
console.log(buscador)
let selectOrden = document.getElementById("selectOrden")
console.log(selectOrden.innerHTML)
let guardarLibroBtn =document.getElementById("guardarLibroBtn")
let formAgregarLibro = document.getElementById("formCargarLibro")
let modalBodyCarrito = document.getElementById("modalBodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
//muestra de ejemplo
titulo.innerText = "Mis libros 🙌"
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
            <button class="btn btn-success" id="btnAgregar${libro.id}"data-bs-toggle="tooltip" data-bs-placement="left">Agregar al carrito</button>
            </div>
        </div>  `
        
        //adjuntar al container este div creado
        containerLibros.append(libroNuevoDiv)
        //capturar cada btn de forma unívoca
        let btnAgregarCarrito = document.getElementById(`btnAgregar${libro.id}`)
        console.log(btnAgregarCarrito)
        //pasarle/adjuntar un evento 
        btnAgregarCarrito.addEventListener("click", function(){
            //FIJARME SI YA EXISTE EN EL CARRITO, sino existe lo pusheo
            //si existe, advertir que el libro ya estpa en el carrito. USTEDES DECIDEN QUE HACER
            carrito.push(libro)
            console.log(carrito)
        })
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
function ordenarPorTituloAZ(array){
    //método toSorted hace lo mismo que el sort y no es destructivo
    let ordenadoAZ = array.toSorted((a, b)=>{
        if(a.titulo < b.titulo){
            return -1
        }
        if(a.titulo > b.titulo){
            return 1
        }
        return 0
    })
    
    imprimirCatalogo(ordenadoAZ)
}
function agregarLibro(array){
    let titulo = document.getElementById("tituloInput")
    let precio = document.getElementById("precioInput")
    let stock = document.getElementById("stockInput")
    let autor = document.getElementById("autorInput")

    //array.length
    let libroNuevo = new Libro(array.length + 1, autor.value, titulo.value, precio.value, stock.value,"libroNuevo.jpg")
    array.push(libroNuevo)
    //resear de dos formas, elegir una
    formAgregarLibro.reset()
    //vaciar inputs 
    titulo.value = ""
    autor.value = ""
    stock.value =""
    precio.value = ""
}
function agregarLibroForm(array){
    //muestra de consola de form y cómo capturar un input
    console.log(formAgregarLibro)
    console.log(formAgregarLibro[0])
    console.log(formAgregarLibro[0].value)
    console.log(formAgregarLibro.elements["tituloLibro"])
    console.log(formAgregarLibro.elements["tituloLibro"].value)
    let libroNuevo = new Libro(array.length +1, formAgregarLibro[1].value, formAgregarLibro[0].value, formAgregarLibro[2].value, formAgregarLibro[3].value, "libroNuevo.jpg"
    )
    array.push(libroNuevo)

    //para resear un form
    formAgregarLibro.reset()
}
function imprimirCarrito(array){
    modalBodyCarrito.innerHTML = ""
    //FOR EACH PARA CREAR LAS CARDS E IMPRIMIRLAS
    array.forEach((libro)=>{

        modalBodyCarrito.innerHTML += `
        <div class="card border-primary mb-3" id ="cardCarrito${libro.id}" style="max-width: 540px;">
                 <div class="card-body">
                        <h4 class="card-title">${libro.titulo}</h4>
                        <p class="card-text">${libro.autor}</p>
                        <p class="card-text">Precio unitario $${libro.precio}</p>
                        
                         <p class="card-text" id="">Total de unidades</p> 
                         <p class="card-text" id="">SubTotal </p>
                         <button class= "btn btn-success" ><i class=""></i>+1</button>
                         <button class= "btn btn-danger"  ><i class=""></i>-1</button> 
                         <button class= "btn btn-danger" id="btnEliminar${libro.id}" ><i class="fas fa-trash-alt"></i></button>
                 
                         </div>    
            </div>`
            //acá es complicado adjuntarle un evento -- dentro del mismo forEach que imprime
    })
    //segundo forEach para pasarle eventos
    array.forEach((libro)=>{
        //Voy a adjuntar todos los eventos
        //adjuntar elemento que elimina del DOM la card
        let btnEliminar = document.getElementById(`btnEliminar${libro.id}`)
        btnEliminar.onclick = function(){
            //elimino SOLAMENTE DEL DOM con el remove --falta del array
            let card = document.getElementById(`cardCarrito${libro.id}`)
            card.remove()
            //eliminar este LibRo del array carrito
        }
        //sumarUna Unidad
        //restar una unidad
    })
}

//llamado de functipons: 
imprimirCatalogo(biblioteca)


//eventos
buscador.addEventListener("input", () => {
    const valor = buscador.value.trim().toLowerCase()

    const coincidencias = biblioteca.filter(libro =>
        libro.titulo.toLowerCase().includes(valor) ||
        libro.autor.toLowerCase().includes(valor)
    )

    const ordenado = coincidencias.toSorted((a, b) => a.precio - b.precio)

    imprimirCatalogo(ordenado)
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
        case "3":
            ordenarPorTituloAZ(biblioteca)
        break
        case "4":
        break
    }
})
guardarLibroBtn.onclick = ()=>{
    //array que recibe es nuestro stock
   agregarLibroForm(biblioteca)
    imprimirCatalogo(biblioteca)
}
botonCarrito.onclick = function(){
    imprimirCarrito(carrito)
}