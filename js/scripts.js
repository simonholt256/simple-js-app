// IIFE repo

let pokemonRepository = (function () {

  const pokemonList = [
  ]

  function getAll () {
      return pokemonList
  }

  function add (item) {

    // checks data types - may use again

    /* if (typeof item !== "object") {
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
      console.log(`is object with matching keys. ${item.name} has been added to PokemonList`);
      pokemonList.push(item);
    } */

    pokemonList.push(item);

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
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
    
  }
 

  function findByName (name) {
    const found = pokemonList.find(item => item.name === name);

    if (found) {
      console.log(`The pokemon ${found.name} has been found`);
    } else {
      console.log(`The pokemon ${name} has NOT been found`);
    }
  
  }


  function showLoadingMessage() {
    let loader = document.querySelector('.loading-card-container')
      loader.classList.remove('hidden')
    }

  function hideLoadingMessage() {
    let loader = document.querySelector('.loading-card-container')
      loader.classList.add('hidden')
  }

  function loadList() {

    showLoadingMessage();

    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=20').then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        hideLoadingMessage();
      });
    }).catch(function (e) {
      console.error(e);
      hideLoadingMessage();
    })
  }

  function loadDetails(item) {

    showLoadingMessage();

    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      hideLoadingMessage();
    }).catch(function (e) {
      console.error(e);
      hideLoadingMessage();
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    findByName: findByName,
    loadList: loadList,
    loadDetails: loadDetails
  }

})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});


// DOM

pokemonRepository.getAll().forEach(function(pokemon) {

  pokemonRepository.addListItem(pokemon)

});

// fetching data

fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
  return response.json(); 
}).then(function (pokemonList) {
  console.log(pokemonList); 
}).catch(function () {
});