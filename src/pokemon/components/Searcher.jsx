import { useEffect, useState } from 'react'
import { getPokemonDetails } from "../helpers/utils"
import { PokemonCard } from './PokemonCard';
import { PokemonSpinner } from './PokemonSpinner';

const getSavedPokemon = () => {
  const savedPokemon = localStorage.getItem('pokemonById');
  return JSON.parse(savedPokemon);
};



export const Searcher = () => {
  const storedPokemon = getSavedPokemon();
  const [pokemon, setPokemon] = useState(() => storedPokemon ? storedPokemon : null);
  const [pokemonId, setPokemonId] = useState(() => localStorage.getItem('pokemonId') || '');
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true);
  const savePokemonId = () => { localStorage.setItem('pokemonId', pokemonId) };
  const savePokemon = () => { localStorage.setItem('pokemonById', JSON.stringify(pokemon)) };
  const isPokemonByType = false;



  const getPokemon = async () => {
    try {
      if (pokemonId !== '') {
        const newPokemon = await getPokemonDetails(null, isPokemonByType, pokemonId);
        if (newPokemon.status === 404) {
          throw new Error();
        }
        setPokemon(newPokemon);
        setLoading(false);
      }
    } catch (error) {
      const messageError = 'Pokemon not found by';
      console.error(messageError, error)
      setError(messageError);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemonOnClick();
  }, [])

  const handleIdChange = (event) => {
    event.preventDefault();
    const typedId = event.target.value.toLowerCase().trim();
    setPokemonId(typedId);
  };


  useEffect(() => {
    savePokemonId();
  }, [pokemonId]);


  useEffect(() => {
    savePokemon();
  }, [pokemon]);




  const fetchPokemonOnClick = () => {
    getPokemon(pokemonId);
    setLoading(true);
    if (error) {
      window.location.reload();
      setLoading(true);

    }

  };


  return (
    <div>
      <div className="mb-3 mx-4" >
        <label className="form-label">Type Pokemon Name or ID</label>
        <input
          value={pokemonId}
          type="text"
          className="form-control"
          id="pokemonId"
          onChange={handleIdChange}
          placeholder="i.e. ditto"
        />
        <button
          className='btn btn-primary mt-2'
          onClick={fetchPokemonOnClick}
        >
          Search
        </button>
      </div>

      <div className="d-flex justify-content-center mt-2 mx-4 mb-2">
        { pokemon !== null && loading && <PokemonSpinner />}
      </div>

      {error &&
        <div className="alert alert-danger animate__animated animate__fadeIn mx-4">
          {error} <b>{pokemonId}</b>
        </div>}
      {pokemon !== null && pokemonId && !error && <PokemonCard pokemon={pokemon} key={pokemon.id} />}
    </div>
    
  )
}
