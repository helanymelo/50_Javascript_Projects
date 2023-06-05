const poke = document.getElementById('poke-container')
const pokemon_count = 20

const color = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric:'#FCF7DE',
    water: '#DEF3FD',
    ground:'#f4e7da',
    rock: '#d5d5d4',
    fairy:'#fceaff',
    poison:'#987da5',
    bug:'#f8d5a3',
    dragon:'#97b3e6',
    normal: '#F5F5F5'
}

const fetchPokemon= async ()=>{
    for(let i = 1; i<=pokemon_count;i++){
        await getPokemon(i)
    }
}

const getPokemon = async(id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
    console.log(data);
}

fetchPokemon()


const createPokemonCard = (pokemon) =>{
    const pokemonElement = document.createElement('div')
    pokemonElement.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)

    const id = pokemon.id.toString().padStart(3, '0')
    const type = pokemon.types[0].type.name

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">
        
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>
    `
    pokemonElement.innerHTML = pokemonInnerHTML

    poke.appendChild(pokemonElement)

}