fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
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