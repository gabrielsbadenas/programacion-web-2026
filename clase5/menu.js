let cerrarMenu=false
do{
    let opcion=prompt(`ingrese la opcion que desea: 1-hola
        2-felicitar
        3-salir del menu`)
    if(opcion==0) cerrarMenu=true
    if (opcion==1) console.log("hola, como estas")
}while(cerrarMenu==false)