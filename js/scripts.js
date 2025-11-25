let pokemonList = [{name: "Bulbasaur", height: `2' 04"`, type: "grass", poisionous: true,
                weaknesses: ["Fire", "Ice", "Flying", "Psychic"]},
                {name: "Charmander ", height: `2' 00"`, type: "fire", poisionous: false,
                weaknesses: ["Water", "Ground", "Rock"]},
                {name: "Squirtle", height: `1' 08"`, type: "water", poisionous: false,
                weaknesses: ["Grass", "Electric"]},
                {name: "Diglett", height: `0' 08"`, type: "ground", poisionous: false,
                weaknesses: ["Water", "Grass", "Ice"]},
]

let currentPokemonIndex = 1;

console.log("the current pokemon is " + pokemonList[currentPokemonIndex].name +
            "a " + pokemonList[currentPokemonIndex].type + " type pokemon, that is " +
            pokemonList[currentPokemonIndex].height + " tall.");