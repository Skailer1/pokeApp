export const getPokemonById = async (pokeId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`
    const response = await fetch(url);
    const data = await response.json();
    return data;



}

export const fetchAllPokemons = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=20`
    const response = await fetch(url);
    const { results } = await response.json();

    return results;

};

export const getPokemonsByType = async (typeId) => {
    const url = `https://pokeapi.co/api/v2/type/${typeId}`;
    const response = await fetch(url);
    const { pokemon } = await response.json();

    return pokemon;

}



export const getPokemonDetails = async (pokemon, isTypeDetails, pokemonId ) => {
    const pokemonByIdUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

    const url = isTypeDetails ? pokemon.pokemon.url : (pokemonId? pokemonByIdUrl : pokemon.url) ;
    const response = await fetch(url);    
    const { name, sprites, types, id, base_experience, weight, height, abilities } = await response.json();
    const typeNames = types.map((type) => type.type.name);
    const image = sprites.other["official-artwork"].front_default;
    const abilitieNames = abilities.map((ability) => ability.ability.name);
  
    return {
      name,
      id,
      image,
      typeNames,
      base_experience,
      weight,
      height,
      abilitieNames,
      
    };
  };


