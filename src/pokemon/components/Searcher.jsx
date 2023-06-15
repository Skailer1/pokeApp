import { useEffect, useState } from 'react'
import { Card } from './Card';
import { getPokemonById } from "../helpers/utils"


export const Searcher = () => {

  const [pokemon, setPokemon] = useState([]);
  const [pokeId, setPokeId] = useState('');


  const getPokemon = async (pokeId) => {
    const newPokemon = await getPokemonById(pokeId);
    setPokemon(newPokemon);
  }

  useEffect(() => {
    handleOnChangePokemon();


  }, [])

  const handleChange = (event) => {
    event.preventDefault();
    setPokeId(event.target.value);
  }

  const handleOnChangePokemon = () => {
    getPokemon(pokeId);

  }


  return (
    <div>
      <div className="mb-3 mx-4" >
        <label className="form-label">Type Pokemon ID</label>
        <input
          value={pokeId}
          type="text"
          className="form-control"
          id="pokeId"
          onChange={handleChange}
          placeholder="pokemonId"
        />
        <button
          className='btn btn-primary mt-2'
          onClick={handleOnChangePokemon}
        >
          Search
        </button>
      </div>


      {pokemon && <Card pokemon={pokemon} key={pokemon.id} />}
    </div>
  )
}
