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
function actualizarAlgo(arrayStock){
    let elementoActualizar = buscarPorIdTitulo(arrayStock)
    if(elementoActualizar==undefined){
        console.log("el libro ese no existe")
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