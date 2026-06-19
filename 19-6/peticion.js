let divPersonajes = document.getElementById("divPersonajes")

//fetch método que retorna una Promise: pending, fullfield y rejected
//promesa está satisfecha
// fetch("https://hp-api.onrender.com/api/characters/staff")
// //parsearme la respuesta y me la transforma el json
// .then((response)=> response.json())
// //ES EL RESULTADO el parametro info
// .then((info)=>{
//     for(let personaje of info){
//         let nuevoPersonaje = document.createElement("div")

//         nuevoPersonaje.innerHTML = `<div id="" class="card" style="width: 18rem;">
//                 <img class="card-img-top " src="${personaje.image}">
//                 <div class="card-body">
//                     <h5 class="card-title"></h5>
//                     <p class="">${personaje.name}</p>
//                     <p class="">${personaje.house}</p>
//                     <p class="">${personaje.gender}</p>
//                 </div>
//             </div>`
//         //console.log(personaje.name, personaje.house, personaje.gender)
//         divPersonajes.append(nuevoPersonaje)
//     }
// })

// fetch("https://hp-api.onrender.com/api/characters/students")
// //parsearme la respuesta y me la transforma el json
// .then((response)=> response.json())
// //ES EL RESULTADO el parametro info
// .then((info)=>{
//     for(let personaje of info){
//         let nuevoPersonaje = document.createElement("div")

//         nuevoPersonaje.innerHTML = `<div id="" class="card" style="width: 18rem;">
//                 <img class="card-img-top " src="${personaje.image}">
//                 <div class="card-body">
//                     <h5 class="card-title"></h5>
//                     <p class="">${personaje.name}</p>
//                     <p class="">${personaje.house}</p>
//                     <p class="">${personaje.gender}</p>
//                 </div>
//             </div>`
//         //console.log(personaje.name, personaje.house, personaje.gender)
//         divPersonajes.append(nuevoPersonaje)
//     }
// })

fetch("https://hp-api.onrender.com/api/characters/house/Slytherin")
//parsearme la respuesta y me la transforma el json
.then((response)=> response.json())
//ES EL RESULTADO el parametro info
.then((info)=>{
    for(let personaje of info){
        let nuevoPersonaje = document.createElement("div")

        nuevoPersonaje.innerHTML = `<div id="" class="card" style="width: 18rem;">
                <img class="card-img-top " src="${personaje.image}">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="">${personaje.name}</p>
                    <p class="">${personaje.house}</p>
                    <p class="">${personaje.gender}</p>
                </div>
            </div>`
        //console.log(personaje.name, personaje.house, personaje.gender)
        divPersonajes.append(nuevoPersonaje)
    }
})

//trabajar con el contenido es resultado de esta peticion
// fetch("https://akabab.github.io/superhero-api/api/all.json")
// .then((response)=> response.json() )
// .then((data)=>{
//     //console.log("algo")
//     //console.log(data)
//     data.forEach((heroe)=>{
//         //prueba para ver cómo acceder a los atributos
//         console.log(heroe.id, heroe.name, heroe.appearance.gender, heroe.biography.placeOfBirth)

//         let nuevoHeroe = document.createElement("div")
//         nuevoHeroe.className = "mx-auto my-2 col-12 col-md-6 col-lg-4 col-xl-3"
//         nuevoHeroe.innerHTML = `<div id="${heroe.id}" class="card" style="width: 18rem;">
//                 <img class="card-img-top " src="${heroe.images.xs}">
//                 <div class="card-body">
//                     <h5 class="card-title"></h5>
//                     <p class="">${heroe.name}</p>
//                     <p class="">${heroe.biography.placeOfBirth}</p>
//                     <p class="">${heroe.appearance.gender}</p>
//                 </div>
//             </div>`
//             divPersonajes.append(nuevoHeroe)
//     })
// })

//probamos traernos la api de arte que encontramos

fetch("https://api.artic.edu/api/v1/artworks")
.then(r => r.json())
.then((data)=>{
    console.log(data)
})

function traerPersonaHP(id){
    fetch(`https://hp-api.onrender.com/api/character/${id}`)
    .then(rta => rta.json())
    .then((data)=>{
        //porque hice esto, simple la respuesta es un array como es por id me iba dar un solo personaje, decidi con el indice asignarlo a otra variable
        console.log(data)
        let personaje = data[0]
        console.log(personaje.name, personaje.house, personaje.gender, personaje.yearOfBirth, personaje.eyeColour)
    })
}
traerPersonaHP("ca3827f0-375a-4891-aaa5-f5e8a5bad225")
traerPersonaHP("d5c4daa3-c72b40f3fba816")
traerPersonaHP("9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8")

//traernos el archivo .json de libros 

fetch("libros.json")
.then(response => response.json())
.then((info)=>{
    console.log(info)
})
.catch((er)=> console.error(er))
.finally(()=>{
    //me dice que ya NO ESTÄ PENDIENTE
    console.log("LA PETICIÓN AÑ JSON LIBROS TERMINÓ")
})

//misma peticipon que arriba
async function cargarLibros(){
    //usamos await
}
let pedirLibros = async function(){
    //primer await espera la petición
    let respuesta = await fetch("libros.json")
    //espera esa respuesta de la petición y la transforma con el json()
    let info = await respuesta.json()
    console.log(info)
    console.log("Probamos traerno el .json con async await")
    info.forEach((libro)=>{
        console.log(libro)
    })
}

pedirLibros()