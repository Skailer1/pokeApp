
export const getDitto = async() =>
{
    const url =`https://pokeapi.co/api/v2/pokemon/132`
    const response = await fetch (url);
    const dataDitto = await response.json();
    return dataDitto;

   

} 


export const getPokemonById = async(pokeId) =>
{
    const url =`https://pokeapi.co/api/v2/pokemon/${pokeId}`
    const response = await fetch (url);
    const data = await response.json();

  
    return data;

   

} 

export const getPokemons = async() =>
{
    const url =`https://pokeapi.co/api/v2/pokemon`
    const response = await fetch (url);
    const data = await response.json();

  
    return data;

   

} 

export const getPokeTypes = async() =>
{
    const url =`https://pokeapi.co/api/v2/type/1`
    const response = await fetch (url);
    const dataPokeTypes = await response.json();

    return dataPokeTypes;

   

} 