function buscarPorIdTitulo(array){
    let valorEliminar = prompt("ingrese el id o titulo del libro que desea")
    while(valorEliminar.trim().length==0){
        valorEliminar=prompt("ingreso vacio o incorrecto. ingrese el id o titulo del libro que desea")
    }
    let libroEliminar=array.find(book=>book.id==valorEliminar||book.titulo.toUpperCase()==valorEliminar.toUpperCase())
    return libroEliminar
}
function eliminarLibroCarrito(arrayCarrito){
    mostrarCarrito(arrayCarrito)
    let elementocarritoeliminar=buscarPorIdTitulo(arrayCarrito)
    if(elementocarritoeliminar==undefined){
        console.log("el libro seleccionado no existe en el carrito")
    }
    else{
        let index=arrayCarrito.indexOf(elementocarritoeliminar)
        arrayCarrito.splice(index,1)
        mostrarCarrito(arrayCarrito)
    }
}