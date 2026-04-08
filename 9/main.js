//consigna para primera semana de abril:

//INDISPENSABLE:
//Realizar una class constructora con al menos 4 o 5 atributos (uno candidato a Primary key, alguno que sea númerico como precio y otro que sea una cadena de texto) que tenga al menos un método
class Profesor{
    constructor(DNI,nombre,materia,fichaCensal){
        this.DNI = DNI;
        this.nombre = nombre;
        this.materia = materia;
        this.fichaCensal = fichaCensal;
    }
    mostrarProfesor(){
        console.log(`El profesor ${this.nombre} con DNI ${this.DNI} dicta la materia de ${this.materia} y su ficha censal es ${this.fichaCensal}`);
    }
    tieneFichaCensal(){
        return this.fichaCensal > 0;
    }
}
//Realizar entre 6 y 10 instancias, intentar que en algunos atributos se compartan valores. Ejemplo: autor que al menos dos sean de Borges u otro autor. Que la info tenga contexto y sentido. Si uno de los libros vale 300, el otro que es similar no puede valer 4 millones

//crear un array y guardar todas las instancias que realizaron, ej:biblioteca
const profesores = [
    new Profesor(44333222,"pedro perez","matematica",0),
    new Profesor(33444555,"gonzalo gonzalez","tecnologia",13),
    new Profesor(22999666,"pablo paez","civica",6),
    new Profesor(22333444,"martin martinez","lengua",3),
    new Profesor(43231543,"fernando fernandez","ingles",8),
    new Profesor(33666777,"rodrigo rodriguez","arte",2)
];

//Una función que permita al usuario preguntarle los datos necesarios e instanciar un objeto con la class constructora
function validarNumero(mensaje){
    let numero = parseInt(prompt(mensaje));
    while(isNaN(numero) || numero <= 0){
        numero = parseInt(prompt("Número inválido. " + mensaje));
    }
    return numero;
}
function crearProfesor(){
    //usar while para validar que el numero sea correcto y no un valor cualquiera, que sea positivo
    //tambien se puede usar profesores.length+1
    let DNI = validarNumero("Ingrese el DNI del profesor");
    let nombre = prompt("Ingrese el nombre del profesor");
    let materia = prompt("Ingrese la materia que dicta el profesor");
    let fichaCensal = validarNumero("Ingrese la ficha censal del profesor");
    const nuevoProfesor = new Profesor(DNI,nombre,materia,fichaCensal);
    profesores.push(nuevoProfesor);
}
//Esperable para el miércoles: 
//Tener un menú interactivo(que el usuario pueda elegir una opción, luego otra y salir cuando desee) con al menos 4 opciones en las cuales se va a ofrecer distintas (puede hacerlo con un while o do while)
//utilizar al menos tres métodos de arrays
//Dos funciones de búsqueda: pueden ser con find o filter, según consideren. Buscar por autor o Buscar por titulo o buscar libros que sean más baratos que
//Una función mostrarCatalogo: puede ser con un for of o forEach(todavía no lo use en clases) que recorrar el array y muestre cada elemento en la consola (pueden usar un método de la class para mostrar cada libro). Antes del lunes tendrán ejemplo de esto
function mostrarProfesores(){
    profesores.forEach(profesor => profesor.mostrarProfesor());
}
function buscarProfesorPorDNI(){
    let DNI = parseInt(prompt("Ingrese el DNI del profesor que desea buscar"));
    const profesorEncontrado = profesores.find(profesor => profesor.DNI === DNI);
    if(profesorEncontrado){
        profesorEncontrado.mostrarProfesor();
    } else {
        console.log("No se encontró un profesor con ese DNI");
    }
}
function buscarProfesoresPorMateria(){
    let materia = prompt("Ingrese la materia que desea buscar");
    const profesoresEncontrados = profesores.filter(profesor => 
        {return profesor.materia.toLowerCase() === materia.toLowerCase();});
    if(profesoresEncontrados.length > 0){
        profesoresEncontrados.forEach(profesor => profesor.mostrarProfesor());
    } else {
        console.log("No se encontraron profesores que dictan esa materia");
    }
}

function eliminarPorID(array){
    mostrarProfesores();
    let idEliminar = parseInt(prompt("Ingrese el DNI del profesor que desea eliminar"));
    console.log(idEliminar)
    let profesorEliminado = array.find(profesor=>profesor.DNI === idEliminar)
    if(profesorEliminado==undefined){
        console.log("No se encontró un profesor con ese DNI");
        return undefined
    }
    
    let indice = array.indexOf(idEliminar)
    array.splice(indice,1);
    return profesorEliminado
}
function buscarPorMateriaYnombre(materia,nombre){
    const profesorEncontrado = profesores.find((profesor) => 
        {return profesor.materia.toLowerCase().includes(materia.toLowerCase()) || 
            profesor.nombre.toLowerCase().includes(nombre.toLowerCase());});
    return profesorEncontrado;
}