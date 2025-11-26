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
];

let currentPokemonIndex = 1;

console.log("the current pokemon is " + pokemonList[currentPokemonIndex].name +
            "a " + pokemonList[currentPokemonIndex].type + " type pokemon, that is " +
            pokemonList[currentPokemonIndex].heightCm + " tall.");
            

pokemonList.forEach(function(pokemon) {
  
  document.write(
    pokemon.name +  "<br> (Type: " 
    + pokemon.type + ") (Height: "
    + pokemon.heightCm + "cm)");

  let tallCheck = pokemon.heightCm > 70 ? " Wow! That's big! <br> <br>" : "<br> <br>";

  document.write(tallCheck);
})


