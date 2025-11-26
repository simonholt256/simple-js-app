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
    } else if (
      Object.keys(item)[0] !== Object.keys(pokemonList[0])[0] ||
      Object.keys(item)[1] !== Object.keys(pokemonList[0])[1] ||
      Object.keys(item)[2] !== Object.keys(pokemonList[0])[2] ||
      Object.keys(item)[3] !== Object.keys(pokemonList[0])[3] ||
      Object.keys(item)[4] !== Object.keys(pokemonList[0])[4]) {
      console.log("keys don't match")
    } else {
      pokemonList.push(item)
      console.log("is object with matching keys")
    }
  }

  return {
    getAll: getAll,
    add: add
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

// DOM

pokemonRepository.getAll().forEach(function(pokemon) {
  
  document.write(
    pokemon.name +  "<br> (Type: " 
    + pokemon.type + ") (Height: "
    + pokemon.heightCm + "cm)");

  let tallCheck = pokemon.heightCm > 70 ? " Wow! That's big! <br> <br>" : "<br> <br>";

  document.write(tallCheck);
})


