// IIFE repo

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
    if (typeof item !== "object") {
      console.log("not an object")
      return
    } 
    
    const requiredKeys = Object.keys(pokemonList[0]);
    console.log(requiredKeys)

    const itemKeys = Object.keys(item);
    console.log(itemKeys)

    const hasAllKeys = requiredKeys.every(key => itemKeys.includes(key));

    if (!hasAllKeys) {
      console.log("key don't match")
    } else {
      console.log(`is object with matching keys. ${item.name} has been added to PokemonList`)
    }

  } 

 

  function findByName (name) {
    const found = pokemonList.find(item => item.name === name);

    if (found) {
      console.log(`The pokemon ${found.name} has been found`);
    } else {
      console.log(`The pokemon ${name} has NOT been found`);
    }
  
  }

  return {
    getAll: getAll,
    add: add,
    findByName: findByName
  }

})();

// getAll function check

console.log(pokemonRepository.getAll());


// add function check

// Should work and console.log "is object with matching keys"

pokemonRepository.add({
      name: "Sandshrew",
      heightCm: 61,
      type: "Ground",
      poisionous: false,
      weaknesses: ["Water", "Grass", "Ice"]
    });


// Should console.log "not an object"

pokemonRepository.add(
      "Sandshrew"
    );


// Should console.log "keys don't match"

pokemonRepository.add({
      name: "Arbok",
      heightFeetInches: `11' 06"`,
      type: "Poison",
      poisionous: true,
      weaknesses: ["Ground", "Psychic"]
    
    });


// find by name 

// should console.log "The Pokemon (name) has been found"

pokemonRepository.findByName("Diglett");

// should console.log "The Pokemon (name) has NOT been found"

pokemonRepository.findByName("Metapod");


// DOM

pokemonRepository.getAll().forEach(function(pokemon) {
  
  document.write(
    pokemon.name +  "<br> (Type: " 
    + pokemon.type + ") (Height: "
    + pokemon.heightCm + "cm)");

  let tallCheck = pokemon.heightCm > 70 ? " Wow! That's big! <br> <br>" : "<br> <br>";

  document.write(tallCheck);
})


