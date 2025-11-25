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
            

for (let i = 0; i < pokemonList.length; i++) {
  console.log(i);

  document.write(
    "<br> <br>" + pokemonList[i].name +  "<br> (Type: " 
    + pokemonList[i].type + ") (Height: "
    + pokemonList[i].heightCm + "cm)");
  
  if (pokemonList[i].heightCm > 70) {
    document.write(" Wow! That's big!")
  }
};
