let numbers = [123,412,534,652,3245,2134]
numbers.forEach(number => {
    console.log(number/2);
});
numbers.sort((a,b) => a - b);//menor a mayor
console.log(numbers);
numbers.sort((a,b) => b - a);//mayor a menor
console.log(numbers);
let profesores = ["gabriel", "rodrigo", "maria", "juan"];
function ordenarAlfabeticamente(array){
    //to sorted es como sort pero no es destructivo, no modifica el array original
    
    let ordenadoAZ=array.toSorted((a,b) => {
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    });
    let ordenadoZA=array.toSorted((a,b) => {
        if(a < b) return 1;
        if(a > b) return -1;
        return 0;
    });
    console.log("Ordenado de A a Z: ", ordenadoAZ);
    console.log("Ordenado de Z a A: ", ordenadoZA);
}
ordenarAlfabeticamente(profesores);