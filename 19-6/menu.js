//estructura condicional switch
let salirMenu = false
do{
    let opcion = prompt(`Ingrese la opción que desea
    1 - Mostrar catalogo
    2 - Agregar libro al catalogo
    3 - Eliminar libro del catalogo 
    4 - Ordenar
    5 - Buscar por titulo
    6 - Buscar por autor
    7 - Buscar por titulo o autor
    8 - Agregar al carrito
    9 - Quitar libro del carrito
    10 - Finalizar compra 😎😎
    11 - Actualizar precio libro
    12 - Actualizaciones
    0 - Salir del menu`)   
switch(opcion){
    case "1":
        mostrarCatalogo(biblioteca)
    break
        case "2":
        agregarLibro(biblioteca)
    break  
    case "3":
        eliminarLibroCatalogo(biblioteca)
    break
    case "4":
        let opcionOrdenar = prompt(`Por que criterio desea ordenar el stock:
            A - Menor a mayor por precio
            B - Mayor a menor por precio
            C - Por titulo de la A-Z
            D - Por titulo de la Z-A`)
        switch(opcionOrdenar.toUpperCase()){
            case "A":
                ordenarMenorMayorPrecio(biblioteca)
            break
            case "B":
                ordenarMayorMenorPrecio(biblioteca)
            break
            case "C":
                ordenarPorTituloAZ(biblioteca)
            break
            case "D":
                ordenarPorTituloZA(biblioteca)
            break
            default:
                console.log(`La opción ingresada no existe ${opcionOrdenar}`)
            break
        }
    break
    case "5":
        buscarPorTitulo(biblioteca)
    break
    case "6":
        buscarPorAutor(biblioteca)
    break
    case "8":
        
        let seguirComprando = false
        do{
            agregarCarrito(biblioteca,carrito)
            let seguir = prompt(`Desea seguir comprando S o N`)
            if(seguir.toUpperCase() == "S"){
                seguirComprando = true
            }else{
                seguirComprando = false
            }
        }while(seguirComprando != false) 
        
    break
    case "9":
        eliminarLibroCarrito(carrito)
    break
    case "10":
        //carrito acá es una variable global
        carrito = finalizarCompra(carrito)
        console.log(`El carrito quedo así despues de finalizar la compra`)
        console.log(carrito)
    break
    case "11":
        mostrarCatalogo(biblioteca)
        libroActualizar = buscarPorIdTitulo(biblioteca)
        console.log(libroActualizar)
        if(libroActualizar == undefined){
            console.log(`El libro que quieres actualizar no existe`)
        }else{
            libroActualizar.actualizarPrecio()
            console.log(libroActualizar)
        }
    break
    case "12":
        actualizarAlgo(biblioteca)
    break
    case "0":
        console.log(`Salir del menu. Gracias por usar la app`)
        salirMenu = true
    break
    default: 
    console.log(`La opción ${opcion} no existe`)
    break
    }
}while(salirMenu == false)
