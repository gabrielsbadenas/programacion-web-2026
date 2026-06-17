fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
  .then(res => res.json())
  .then(data => {
    data.results.forEach(pokemon => {
      fetch(pokemon.url)
        .then(res => res.json())
        .then(pokemonData => {
          document.getElementById("pokemon").innerHTML += `
            <p>Name: ${pokemon.name} - types: ${pokemonData.types.map(t => t.type.name)} - Weight: ${pokemonData.weight}</p>
          `;
        });
    });
  })
  .catch(error => console.error('Error:', error));

async function pedir(){
    let dom = await document.getElementById("game-of-thrones")
    let url = "https://thronesapi.com/api/v2/Characters"
    let res = await fetch(url)
    let info = await res.json()
    console.log(info)
    info.forEach((element)=>{
        console.log(element)
        dom.innerHTML+=0//JSON.stringify(element)
    })
  }
  pedir()