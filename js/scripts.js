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

  function addListItem (pokemon) {
    const pokemonListElement = document.querySelector('.pokemon-list');

    let listItem = document.createElement('li');

    let button = document.createElement('button');

    button.innerText = pokemon.name;

    listItem.appendChild(button);

    pokemonListElement.appendChild(listItem);
    
    addClickFunction(button, pokemon);
    
  }

  function addClickFunction (button, pokemon) {
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }


  function showDetails (pokemon) {
    console.log(pokemon);
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
    addListItem: addListItem,
    findByName: findByName
  }

})();

// Should work and console.log "is object with matching keys"

pokemonRepository.add({
      name: "Sandshrew",
      heightCm: 61,
      type: "Ground",
      poisionous: false,
      weaknesses: ["Water", "Grass", "Ice"]
    });


// DOM

pokemonRepository.getAll().forEach(function(pokemon) {

  pokemonRepository.addListItem(pokemon)

});


fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
  return response.json(); // This returns a promise!
}).then(function (pokemonList) {
  console.log(pokemonList); // The actual JSON response
}).catch(function () {
  // Error
});