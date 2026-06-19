//libreria luxon
let DateTime = luxon.DateTime

//FUNCION que reccorre el array e imprime en eldom todos mis libros

//capturas del DOM
let containerLibros = document.getElementById("containerLibros")
let titulo = document.getElementById("tituloPrincipal")
let buscador = document.getElementById("buscador")

let selectOrden = document.getElementById("selectOrden")

let guardarLibroBtn =document.getElementById("guardarLibroBtn")
let formAgregarLibro = document.getElementById("formCargarLibro")
let modalBodyCarrito = document.getElementById("modalBodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let totalCarrito = document.getElementById("totalCarrito")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")
let divLoader = document.getElementById("divLoader")
let reloj = document.getElementById("reloj")
let loader = document.getElementById("loader")
//muestra de ejemplo
titulo.innerText = "Mis libros 🙌"
//funciones

function imprimirCatalogo(array = []){
    containerLibros.innerHTML = ""
    //VAÑIDAR SI HAY PRODUCTOS PARA MOSTRAR, SINO HAY MOSTRAR TODO Y DECIR QUE PARA LA BUSQUEDA NO HAY COINCIDENCIAS, sino mostrar lo que coincida
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
        //pasarle/adjuntar un evento 
        btnAgregarCarrito.addEventListener("click", function(){
            agregarLibroCarrito(libro)
        })
    })
}

function agregarLibroCarrito(book){
    //FIJARME SI YA EXISTE EN EL CARRITO, sino existe lo pusheo
    let libroEnCarrito = carrito.find((elem)=>elem.id == book.id )
    //si existe, advertir que el libro ya estpa en el carrito. USTEDES DECIDEN QUE HACER
    if(libroEnCarrito == undefined){
        //agrego el libro al carrito
        carrito.push(book)
        //agregar a storage
        localStorage.setItem("carrito", JSON.stringify(carrito))
        //AGREGAMOS LIBRERIA TOASTIFY
        Toastify({
                    text: `El libro ${book.titulo} fue agregado al carrito`,
                    duration: 2800,
                    gravity: "bottom", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "#0bf83e",
                        color: "black"
                    }
                    }).showToast();
    }else{
        
        book.sumarUnidad()
        //ACTUALIZO EL STORAGE PORQUE DEBO REFLEJAR QUE SE SUMO UNA UNIDAD Y ACTUALIZARLO TMB EN EL STORAGE
        localStorage.setItem("carrito", JSON.stringify(carrito))
        console.log(`El libro ${book.titulo} ahora tiene ${book.cantidad} unidades`)
        Toastify({
                    text: `El libro ${book.titulo} ahora tiene ${book.cantidad} unidades`,
                    duration: 2800,
                    gravity: "bottom", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "#b3f312",
                        color: "black"
                    }
                    }).showToast();
    }
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
    let libroNuevo = new Libro(array.length +1, formAgregarLibro[1].value, formAgregarLibro[0].value, Number(formAgregarLibro[2].value), Number(formAgregarLibro[3].value), "libroNuevo.jpg"
    )
    array.push(libroNuevo)
    //guardar en el storage el libro que acabo de pushear al array
    localStorage.setItem("biblioteca", JSON.stringify(array))
    //para resear un form
    formAgregarLibro.reset()
}
function imprimirCarrito(array){
    modalBodyCarrito.innerHTML = ""
    //VAÑIDAR SI HAY PRODUCTOS EN EL CARRITO, sino hay decirle el carrito está vacio. SI hay mostrar el que corresponde. 
    //FOR EACH PARA CREAR LAS CARDS E IMPRIMIRLAS
    array.forEach((libro)=>{

        modalBodyCarrito.innerHTML += `
        <div class="card border-primary mb-3" id ="cardCarrito${libro.id}" style="max-width: 540px;">
                 <div class="card-body">
                        <h4 class="card-title">${libro.titulo}</h4>
                        <p class="card-text">${libro.autor}</p>
                        <p class="card-text">Precio unitario $${libro.precio}</p>
                        
                         <p class="card-text" id="">Total de unidades: ${libro.cantidad} </p> 
                         <p class="card-text" id="">SubTotal ${libro.cantidad * libro.precio} </p>
                         <button class= "btn btn-success" id="btnSumarUnidad${libro.id}" ><i class=""></i>+1</button>
                         <button class= "btn btn-danger" id="btnRestarUnidad${libro.id}" ><i class=""></i>-1</button> 
                         <button class= "btn btn-danger" id="btnEliminar${libro.id}" ><i class="fas fa-trash-alt"></i></button>
                 
                         </div>    
            </div>`
            //acá es complicado adjuntarle un evento -- dentro del mismo forEach que imprime
    })
    //segundo forEach para pasarle eventos
    //Voy a adjuntar todos los eventos en este forEach
    array.forEach((libro)=>{
        //evento sumarUnidad con btn +1
        let btnSumarUnidad = document.getElementById(`btnSumarUnidad${libro.id}`)
        btnSumarUnidad.addEventListener("click", ()=>{
            //VALIDO PENSADO EL STOCK COMO TECHO?????
            //sumar una unidad al objeto dentro del array le suma una unidad
            libro.sumarUnidad()
            //storage actualizo
            localStorage.setItem("carrito", JSON.stringify(array))
            console.log(`El libro ${libro.titulo}, ahora tiene ${libro.cantidad}`)
            //renderizando TODO el carrito solamente para poder actualizar el subtotal y la cantidad de unidades
            imprimirCarrito(carrito)
            calcularTotal(carrito)
        })
        //otro evento restarUnidad con btn -1
        document.getElementById(`btnRestarUnidad${libro.id}`).addEventListener("click", ()=>{
            //VALIDAR QUE NO LLEGUE A CERO O NEGATIVO
            //DECIDIR SI LLEGO A CERO SI ELIMINO O SI ANTES NO LO DEJO LLEGAR ACERO CON BTN
            //restar unidad
            libro.restarUnidad()
            //storage actualizo
            localStorage.setItem("carrito", JSON.stringify(array))
            console.log(`El libro ${libro.titulo}, ahora tiene ${libro.cantidad}`)
            //volver a renderizar el carrito
            imprimirCarrito(carrito)
            calcularTotal(carrito)
        })
        //adjuntar elemento que elimina del DOM la card
        let btnEliminar = document.getElementById(`btnEliminar${libro.id}`)
        btnEliminar.onclick = function(){
            //elimino SOLAMENTE DEL DOM con el remove --falta del array
            let card = document.getElementById(`cardCarrito${libro.id}`)
            card.remove()
            //eliminar este LibRo del array carrito
            let index = carrito.indexOf(libro)
            carrito.splice(index,1)
            console.log(carrito)
            calcularTotal(carrito)
            //storage actualizo
            localStorage.setItem("carrito", JSON.stringify(array))
        }
        //sumarUna Unidad
        //restar una unidad
    })
    calcularTotal(carrito)
}
function calcularTotal(carrito){
    let totalReduce = carrito.reduce((acumulador, elemento)=> acumulador + (elemento.precio * elemento.cantidad), 0)
    totalCarrito.innerText = `El total del carrito es ${totalReduce}`
    return totalReduce
}

function finalizarCompra(carrito){
    if(carrito.length >= 1){
        //calcular y mostrar el total
        let mostrarTotal= calcularTotal(carrito)
        console.log(`El total de su compra es ${mostrarTotal}`)
        //vaciar el carrito
        carrito = []
        //vaciar el DOM
        imprimirCarrito(carrito)
        let fechaCompra = DateTime.now()
        //agregamos provisoriamente un sweet alert para genera un cartel que diga que la compra fue realizada con éxito
        Swal.fire({
                    title: 'Gracias por su compra😊',
                    text: `Siendo ${fechaCompra.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)} le agradecemos por su compra`,
                    icon: 'success',
                    confirmButtonText: 'Continuar'
                    })
        totalCarrito.innerText = `No hay productos en el carrito`
        //localStorage.setItem("carrito", [])
        localStorage.removeItem("carrito")
        return carrito
    }else{
        console.log(`No puede finalizar la compra ya qye no hay productos en el carrito`)
    }
}




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
botonFinalizarCompra.addEventListener("click", function(){
    console.log(`FINALIZAR COMPRA ANDA EVENTO`)

    Swal.fire({
        title: "Desea finalizar su compra👌?",
        showCloseButton: true,
        showDenyButton: true,
        confirmButtonText: "Si, quiero",
        denyButtonText: `Voy a seguir mirando`
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed){
            carrito = finalizarCompra(carrito)
        } 
        else if(result.isDenied){
            Swal.fire({
                title: "Tus productos siguen en el carrito :D",
                showConfirmButton: false,
                icon: "info",
                timer: 2000
            })
        }
        })
})


//llamado de functions
setTimeout(()=>{
    imprimirCatalogo(biblioteca)
    loader.classList.toggle("ocultar")
},2000)

setInterval(()=>{
    let horaReloj = DateTime.now()
    reloj.innerText = `${horaReloj.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}`
},1000)