fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
  .then(res => res.json())
  .then(data => {
    data.results.forEach(pokemon => {
      document.getElementById("pokemon").innerHTML += `
        <h2>${pokemon.name}</h2>
      `;
      console.log(pokemon)
    });
  })
  .catch(error => console.error('Error:', error));