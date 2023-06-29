import { useEffect, useState } from 'react';
import { getPokemonsByType, getPokemonDetails } from '../helpers/utils';
import { PokemonCard } from './PokemonCard';
import { PokemonSpinner } from './PokemonSpinner';

const getSavedPokemons = () => {
  const savedPokemons = localStorage.getItem('pokemonsTypeList');
  return JSON.parse(savedPokemons);
}

export const PokemonTypeList = ({ pokemonTypeId, pokemonTypeValue }) => {

  const storedPokemons = getSavedPokemons();
  const [pokemonsByType, setPokemonsByType] = useState(storedPokemons ? storedPokemons : [])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true);
  const savePokemons = () => { localStorage.setItem('pokemonsTypeList', JSON.stringify(pokemonsByType)) }
  const isPokemonByType = true;
  const limit = 20;

  const getAllPokemons = async () => {
    try {
      //First promise populates the list of pokemon by given id.
      const pokemonsByType = await getPokemonsByType(pokemonTypeId);

      if (pokemonTypeId !== '') {
        //Second promise populates the details necessary to display in fields of components as card or page as PageInfo.
        const pokemonsByTypePromises = pokemonsByType
          .slice(0, limit)
          .map((pokemon) => getPokemonDetails(pokemon, isPokemonByType));
        //After receiving the promises pokemonsByType array is set with the new data, the spread operator is used to avoid data mutation.
        const resolvedPokemons = await Promise.all(pokemonsByTypePromises);
        setPokemonsByType((prevPokemons) => [...prevPokemons, ...resolvedPokemons]);
        setLoading(false);
      }
    }
    catch (error) {
      const errorMessage = 'Error fetching pokemons by type ';
      console.error(errorMessage, error);
      setError(errorMessage);
      setLoading(false);

    }


  }


  useEffect(() => {
    savePokemons();
  }, [pokemonsByType]);


  const handlePokemonChange = () => {
    if (getAllPokemons() !== null) {
      setPokemonsByType([]);
      setLoading(true);
    }

  };

  useEffect(() => {
    handlePokemonChange();

  }, [pokemonTypeId])


  return (
    <>
      {pokemonTypeValue && <h4 className='mt-2'>Pokemon Type: {pokemonTypeValue}  </h4>}

      <div className="d-flex justify-content-center mt-2 mb-2">
        {pokemonTypeValue && loading && <PokemonSpinner />}
      </div>
      <div className="row rows-cols-1 row-cols-md-5 g-3">

        {pokemonsByType.map((pokemon) =>
          <PokemonCard
            pokemon={pokemon}
            key={pokemon.id} />
        )}
      </div>

      {error &&
        <div className="alert alert-danger animate__animated animate__fadeIn mx-4">
          {error}
        </div>}



    </>
  )
}
