let pokemonRepository = (function () {

  const pokemonList = [{
      name: "Bulbasaur",
      heightCm: 71, 
      type: "Grass",
      poisionous: true,
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
    }, {
      name: "Charmander ",
      heightCm: 61,
      type: "Fire",
      poisionous: false,
      weaknesses: ["Water", "Ground", "Rock"]
    }, {
      name: "Squirtle",
      heightCm: 50,
      type: "Water",
      poisionous: false,
      weaknesses: ["Grass", "Electric"]
    }, {
      name: "Diglett",
      heightCm: 20,
      type: "Ground",
      poisionous: false,
      weaknesses: ["Water", "Grass", "Ice"]
    }
  ]

  function getAll () {
      return pokemonList
  }

  function add (item) {
    pokemonList.push(item)
  }

  return {
    getAll: getAll,
    add: add
  }

})();

console.log(pokemonRepository.getAll());

pokemonRepository.add({
      name: "Sandshrew",
      heightCm: 61,
      type: "Ground",
      poisionous: false,
      weaknesses: ["Water", "Grass", "Ice"]
    });

// console.log(pokemonRepository.getAll());

// let currentPokemonIndex = 1;

/* console.log("the current pokemon is " + pokemonList[currentPokemonIndex].name +
            "a " + pokemonList[currentPokemonIndex].type + " type pokemon, that is " +
            pokemonList[currentPokemonIndex].heightCm + " tall."); */
            

pokemonRepository.getAll().forEach(function(pokemon) {
  
  document.write(
    pokemon.name +  "<br> (Type: " 
    + pokemon.type + ") (Height: "
    + pokemon.heightCm + "cm)");

  let tallCheck = pokemon.heightCm > 70 ? " Wow! That's big! <br> <br>" : "<br> <br>";

  document.write(tallCheck);
})


