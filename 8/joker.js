
class Joker{
    constructor(number,
        name,
        //chips,
        //mult,
        //modifiers,// Base,Foil(+50 Chips),Holographic(+10 Mult),Polychrome(X1.5 Mult),Negative(+1Jokerslot)
        cost,
        type,
        activation,
        unlockRequirement,
    ){
        this.number=number,//id
        this.name=name,
        //this.chips=chips,
        //this.mult=mult,
        //this.modifiers=modifiers,
        this.cost=cost,
        this.type=type,
        //activation deberia ser una function
        this.activation=activation,
        this.unlockRequirement=unlockRequirement
    }
    showJokerInfo(){
        console.log(`El joker ${this.name} tiene un costo de ${this.cost} chips, 
            es de tipo ${this.type}, se activa ${this.activation} y se desbloquea 
            con ${this.unlockRequirement}`)
    }
}
let instancia1 = new Joker(1,"Joker",2,"+m","ind.","from start"),
instancia2 = new Joker(2,"Greedy",5,"+m","on scored","from start"),
instancia3 = new Joker(3,"Lusty",5,"+m","on scored","from start"),
instancia4 = new Joker(4,"Wrathful",5,"+m","on scored","from start"),
instancia5 = new Joker(5,"Gluttonous",5,"+m","on scored","from start")

let jokers = [instancia1,instancia2,instancia3,instancia4,instancia5]

//filter devuelve un array, aunque sea vacio
let abundancia = jokers.filter((joker)=> {return joker.cost < 300})
console.log(abundancia)
//find devuelve el primero, o sea uno solo. sino lo encuentra devuelve undefined
let prosperidad = jokers.find((joker)=> {return joker.name === "Joker de la prosperidad"})
console.log(prosperidad)
//si pongo las llaves en la arrow function tengo que usar return.