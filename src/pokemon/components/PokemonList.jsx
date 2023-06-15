import { useEffect, useState } from 'react'
import {Card} from './Card'

export const PokemonList = ({typeId}) => {
    const [allPokemons, setAllPokemons] = useState([])

    

    // url con id por parametro para que cambie segun el dropdown.
    const url =`https://pokeapi.co/api/v2/type/${typeId}`
  
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
      if(typeId != ''){
      createPokemonObject(data.pokemon);
      }
    }
  
    useEffect(() => {
     
      getAllPokemons()
    
    
    }, [typeId])

  return (
    <>
    <h4 className='mx-4'>Pokemon Type: {typeId} </h4>
    <div className="row rows-cols-1 row-cols-md-5 g-3">
    
      {allPokemons.map((pokemon, index) => 
      <Card 
      pokemon={pokemon}
      key={index}/>
        )}
      </div>
      </>
    )
}
