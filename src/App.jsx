import { useEffect, useRef, useState } from 'react'
import { Card } from './Card';
import {getDitto, getPokemons, getPokemonById, getPokeTypes} from "./utils"
import { PokemonTypes } from './components/PokemonTypes';
import { pokeTypes } from './dataTypes';



export const App = () => {

  const inputRef =  useRef(null)
  const [pokemon, setPokemon] = useState([]);
  const [pokemonById, setPokemonById] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState();

  //funcion que trae todos los pokemons de un tipo especifico
  const getTypes = async()=> {
    const pokemonType = await getPokeTypes();
    setPokemonTypes(pokemonType);
    
  }

  const getPokemon = async()=> {
    const newPokemon = await getPokemonById(pokemonById);
    setPokemon(newPokemon);
  }

  useEffect(() => {
     handleOnChangePokemon();

   
  }, [])

  const handleOnChangePokemon = () => {
      setPokemonById(inputRef.current.value);
      getPokemon();
  }
  


  return (
   <div>
<div className="mb-3 mx-4" >
  <label  className="form-label">Search Pokemon</label>
  <input 
  ref={inputRef}
  type="text" 
  className="form-control" 
  id="pokemonById" 
  placeholder="pokemonId" 
  />
  <button
  className='btn btn-primary mt-2' 
  onClick={handleOnChangePokemon}>Search</button>
</div>


   <Card infoPokemon={pokemon} />

<div>
  <PokemonTypes/>
</div>
<div>
{/* {
  pokemonTypes.map((types) => (
    <Card key={types.id} infoPokemon={types}/>
  ))
} */}
</div>
   </div>



  )
  
}
