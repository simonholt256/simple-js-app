let pokemonList = [{
    name: "Bulbasaur",
    heightCm: 71, 
    type: "grass",
    poisionous: true,
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
  }, {
    name: "Charmander ",
    heightCm: 61,
    type: "fire",
    poisionous: false,
    weaknesses: ["Water", "Ground", "Rock"]
  }, {
    name: "Squirtle",
    heightCm: 50,
    type: "water",
    poisionous: false,
    weaknesses: ["Grass", "Electric"]
  }, {
    name: "Diglett",
    heightCm: 20,
    type: "ground",
    poisionous: false,
    weaknesses: ["Water", "Grass", "Ice"]
  }
]

let currentPokemonIndex = 1;

console.log("the current pokemon is " + pokemonList[currentPokemonIndex].name +
            "a " + pokemonList[currentPokemonIndex].type + " type pokemon, that is " +
            pokemonList[currentPokemonIndex].heightCm + " tall.");
            

pokemonList.for

for (let i = 0; i <= pokemonList.length; i++) {
  console.log(i);

  document.write(pokemonList[i].name + "/");
}