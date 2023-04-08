let pokemonData = [];

async function getPokemon() {
  try {
    let urlPokemon = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(urlPokemon);
    const data = await response.json();
    pokemonData = data.results;
    //console.log(pokemonData);
  } catch (error) {
    console.log(error);
  }

  pokemonData.forEach((pokemon) =>
    console.log(`Name: ${pokemon.name}, URL: ${pokemon.url}.`)
  );

  document.getElementById("text").style.visibility = "visible";

  document.getElementById("name").innerHTML = ` ${pokemonData.map(
    getPokemonName
  )}`;

  function getPokemonName(item) {
    return [` ${item.name}`];
  }
}
