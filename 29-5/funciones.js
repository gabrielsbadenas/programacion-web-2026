//function
//Revisar cómo hacer dinamica la id
function agregarLibro(array){
    let titulo = prompt(`Ingrese el titulo del libro`)
    let autor = prompt(`Ingrese el nombre del autor de ${titulo}`)
    let precio = Number(prompt(`Ingrese el precio del libro ${titulo}`))
    //validar que PRECIO sea entero y no número

    //libro con el autor y el titulo map some
    let verificarLibro = array.find((book)=> book.autor == autor && book.titulo == titulo)
    //instanciar un object con mi class
    //array.length
    let libroNuevo = new Libro(array.length + 1, autor, titulo, precio, 20)
    libroNuevo.mostrarInfoLibro()
    array.push(libroNuevo)
    console.log(libroNuevo)
}

function mostrarCatalogo(array){
    for(let libro of array){
        libro.mostrarLibroCatalogo()
    }
}
function buscarPorAutor(array){
    //realizar un function que me pregunte por un autor y me devuelva los libros que le pertenecen o "No tiene tiene libros este autor"
    let autorBuscado = prompt(`Ingrese el autor que desea buscar`)
    let coincidenciasAutor = array.filter((elem)=> elem.autor == autorBuscado)
    if(coincidenciasAutor.length < 1){
        console.log(`Para el autor ${autorBuscado} no tenemos coincidencias`)
    }else{
        console.log(`Los libros de ${autorBuscado} son:`)
        mostrarCatalogo(coincidenciasAutor)
    }

}

function buscarPorTitulo(array){
    //find: busca elemento a elemento cuando encuetra algo que coincide LO DEVUELVE COMO ELEMENTO ENTERO Y SINO ENCUENTRA DEVULEVE UNDEFINED
    let tituloBuscado = prompt(`Ingrese el titulo que desea encontrar`)
    
    let tituloEncontrado = array.find((book)=> book.titulo == tituloBuscado)
    if( tituloEncontrado == undefined){
        console.log(`NO existe un libro con el titulo ${tituloBuscado}`)
    }else{
        console.log(`Su libro es:`)
        tituloEncontrado.mostrarLibroCatalogo()
    }
}


//splice e indexOf
function eliminarLibroCatalogo(array){
    mostrarCatalogo(array)
    //function que buscar por id o titulo
    let libroEliminar = buscarPorIdTitulo(array)
    if(libroEliminar == undefined){
        console.log(`No hay ningún libro en el catalogo que corresponda con su bpusqueda`)
    }else{
        //cómo busco el indice 
        let indice = array.indexOf(libroEliminar)
        console.log(`El indice es ${indice}`)
        //para que quiero el indice
        //splice: donde empezaba a trabajar, cuantos elementos a borrar 
        array.splice(indice,1)
        mostrarCatalogo(array)
    }

}


function buscarTituloAutor(array){
    let infoBuscar= prompt(`Ingrese el titulo o autor que estás buscando!`)
   
    let coincidencias = array.filter((elem)=> elem.titulo.toLowerCase().includes(infoBuscar.toLowerCase() )  ||  elem.autor.toLowerCase().includes(infoBuscar.toLowerCase()))
    //devuelve
    //ejemplo descripciop
    //array.filter((elem)=> elem.descripcion.toLowerCase().includes("carpa") )
    if(coincidencias.length < 1){
        console.log(`Para ${infoBuscar} no hay coincidencias ni en el titulo ni en el autor`)
    }else{
        mostrarCatalogo(coincidencias)
    }
}

function ordenarMenorMayorPrecio(array){
    let ordenadoMenorMayor = array.toSorted((a,b)=> a.precio - b.precio)
    mostrarCatalogo(ordenadoMenorMayor)
}
function ordenarMayorMenorPrecio(array){
    //copie  array original con método concat
    let clonBiblioteca = array.concat()
    clonBiblioteca.sort((elem1, elem2)=> elem2.precio - elem1.precio)
    mostrarCatalogo(clonBiblioteca)
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
    
    mostrarCatalogo(ordenadoAZ)
}
function ordenarPorTituloZA(array){
    //método toSorted hace lo mismo que el sort y no es destructivo
    let ordenadoZA = array.toSorted((b, a)=>{
        if(a.titulo < b.titulo){
            return -1
        }
        if(a.titulo > b.titulo){
            return 1
        }
        return 0
    })
    mostrarCatalogo(ordenadoZA)
}

function agregarCarrito(arrayStock, arrayCarrito){
    //mostrar opciones, es decir, catalogo
    mostrarCatalogo(arrayStock)
    //preguntar cual quiere agregar
    let idLibroElegido = Number(prompt(`Cual de los libros del catalogo desea agregar al carrito?`))
    console.log(idLibroElegido)
    //buscar ese libro y chequear que exista
    let libroElegido = arrayStock.find(function(elem){return elem.id == idLibroElegido})
    console.log(libroElegido)
    //condicional para validad que existe ese libro o que lo encontró
    if(libroElegido == undefined){
        console.log(`El id ${idLibroElegido} no corresponde a ninguno de nuestros libros disponibles`)
    }else{
        //agregarlo al carrito
        arrayCarrito.push(libroElegido)
        console.log(`Su carrito es:`)
        console.log(arrayCarrito)
        //TODAVIA PUEDO AGREGARLO DOS VECES
        //para probar mostramos el total
        //calcularTotal(arrayCarrito)
        //QUE PASA SI AGREGO DOS VECES EL MISMO PRODUCTO
    }
}
function mostrarCarrito(carrito){
    carrito.forEach((book)=>{
        book.mostrarLibroCarrito()
    })

}

function eliminarLibroCarrito(arrayCarrito){
    //mostrar el carrito
    mostrarCarrito(arrayCarrito)
    let elementoCarritoEliminar = buscarPorIdTitulo(arrayCarrito)
    if(elementoCarritoEliminar == undefined){
        console.log(`El libro seleccionado no existe en el carrito`)
    }else{
        let index = arrayCarrito.indexOf(elementoCarritoEliminar)
        arrayCarrito.splice(index,1)
        mostrarCarrito(arrayCarrito)
    }
}

function calcularTotal(arrayCarrito){
    //con for común
    let total = 0
    for(let i = 0; i < arrayCarrito.length; i++){
        total += arrayCarrito[i].precio
    }
    console.log(`El total con el for común es ${total}`)
    //con for of
    let totalForOf = 0
    for(let elem of arrayCarrito){
         totalForOf += elem.precio
    }
    console.log(`El total con for of es ${totalForOf}`)
    //con for Each
    let totalForEach = 0
    arrayCarrito.forEach((libro)=>{
        totalForEach += libro.precio
    })
    console.log(`El total con for Each es ${totalForEach}`)
    //reduce: metodo que tiene dos parametros y calcular totales
    arrayCarrito.reduce((total, libro)=> total + libro.precio, 0)
    //RETORNO UN TOTAL PARA UTILIZAR EN OTRO AMBITO
    return total
}

function finalizarCompra(arrayCarrito){
    //validar si el carrito tiene algo
    if(arrayCarrito.length >= 1){
        let precioFinal = calcularTotal(arrayCarrito)
        console.log(`El total gastado en tu compra es ${precioFinal}`)
        //carrito está siendo manipulada como variable local. por lo tanto, si quiero que cómo afecte a este espacio de memoria repercuta a nivel global debo hacer un return ACA LO HACEMOS EN EL MENU LA OPCION FINALIZAR COMPRA
        arrayCarrito = []
        //para mostrar que si se vacio dentro de la function
        console.log("Dentro de finalizar compra el carrito está así")
        console.log(arrayCarrito)
        return arrayCarrito

    }else{
        console.log(`No hay productos en el carrito, no puede finalizar la compra`)
    }

}

//Nuevo 13 de abril
function buscarPorIdTitulo(array){
    let valorEliminar = prompt(`Ingrese el id o el titulo del libro que desea:`)
    //ejemplo de cómo validar que lo ingresado tenga algún tipo de extensión
    //si es valorEliminar == ""  (sólo valida que no tenga ningún tipo de caracter)
    //si es valorEliminar.trim().length == 0 (valida que exista algún caracter sin contar los espacios en blanco)
    while(valorEliminar.trim().length == 0){
        valorEliminar = prompt(`INGRESO VACIO O INCORRECTO. Ingrese el id o el titulo del libro que desea eliminar`)
    }

    //ya tengo el ID o titulo quiero buscar el elemento:
    let libroEliminar = array.find((book)=> book.id== valorEliminar || book.titulo.toUpperCase() == valorEliminar.toUpperCase())
    return libroEliminar
}

//function de prueba actualizaciones opc 12
function actualizarAlgo(arrayStock){
    let elementoActualizar = buscarPorIdTitulo(arrayStock)
    if(elementoActualizar == undefined){
        console.log(`EL libro ese NO EXISTE O NO LO TENEMOS`)
    }else{
        //lo hacemos con un for in
        let atributoActualizar = prompt(`Ingrese el atributo que desea modificar`)
        for(let prop in elementoActualizar){
            console.log(prop)
            console.log(elementoActualizar[prop])
            if(prop ==  atributoActualizar){
                let nuevoValor = Number(prompt(`Ingrese el nuevo valor en ${prop}`))
                elementoActualizar[prop] = nuevoValor
                console.log(elementoActualizar[prop])
            }
        }
        console.log(elementoActualizar)
    }
}


//filtro por categoria o genero
//cosniderar descuentos 
//cantidad. 