import { useEffect, useState } from 'react'
import {Card} from '../Card'

export const PokemonList = () => {
    const [allPokemons, setAllPokemons] = useState([])

    const url ='https://pokeapi.co/api/v2/type/12'

    // url con id por parametro para que cambie segun el dropdown.
   // const url =`https://pokeapi.co/api/v2/type/${typeId}`
  
    const getAllPokemons = async ()=> {
      const res = await fetch(url);
      const data = await res.json();
  
  
  
      function createPokemonObject (result){
        result.forEach( async (pokemonType) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonType.pokemon.name}`);
          const data = await res.json();
  
          setAllPokemons(pokemons => [...pokemons, data]);
        });
      }
      createPokemonObject(data.pokemon);
      console.log();
    }
  
    useEffect(() => {
      getAllPokemons()
      
    
    }, [])

  return (
    <>
    <h4 className='mx-4'>Pokemon Type: </h4>
    <div className="row rows-cols-1 row-cols-md-5 g-3">
    
      {allPokemons.map((pokemon, index) => 
      <Card 
      image={pokemon?.sprites?.front_default} 
      id={pokemon.id}
      name={pokemon.name}
      type={pokemon.types[0].type.name}
      key={index}/>
        )}
      </div>
      </>
    )
}
