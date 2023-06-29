import { useEffect, useState } from "react";
import { fetchAllPokemons, getPokemonDetails } from "../helpers/utils";
import { PokemonCard } from "./PokemonCard";
import { PokemonSpinner } from "./PokemonSpinner";


const getSavedPokemons = () => {
  const savedPokemon = localStorage.getItem('allPokemons');
  return JSON.parse(savedPokemon);
}

export const PokemonList = () => {
  const storedPokemons = getSavedPokemons();
  const [allPokemons, setAllPokemons] = useState(storedPokemons ? storedPokemons : []);
  const savePokemons = () => localStorage.setItem('allPokemons', JSON.stringify(allPokemons));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const isPokemonByType = false;

  const getAllPokemons = async () => {
    try {
      //First promise populates the list of all pokemons with a limit of 20 
      const pokemons = await fetchAllPokemons();
      //Second promise populates the details necessary to display in fields of components as card or page as PageInfo.
      const pokemonPromises = pokemons
        .map((pokemon) => getPokemonDetails(pokemon, isPokemonByType));
      const resultPokemons = await Promise.all(pokemonPromises);
      //After receiving the promises pokemonsByType array is set with the new data, the spread operator is used to avoid data mutation.
      setAllPokemons((prevPokemons) => [...prevPokemons, ...resultPokemons]);
      setLoading(false);
    } catch (error) {
      const errorMessage = 'Error fetching pokemons ';
      console.error(errorMessage, error);
      setError(errorMessage);
      setLoading(false);

    }

  };

  const handleOnChange = () => {
    if (storedPokemons) {
      setAllPokemons([]);
    }
  }

  useEffect(() => {
    handleOnChange();

  }, [])


  useEffect(() => {

    getAllPokemons();

  }, []);

  useEffect(() => {
    savePokemons();
  }, [allPokemons]);



  return (
    <>
      <h4 className='mx-4'>Pokemons</h4>
      <div className="row rows-cols-1 row-cols-md-5 g-3">
        {allPokemons.map((pokemon) =>
          <PokemonCard
            pokemon={pokemon}
            key={pokemon.id} />
        )}
      </div>

      {error &&
        <div className="alert alert-danger animate__animated animate__fadeIn mt-2 mx-4">
          {error}
        </div>}

      <div className="d-flex justify-content-center mt-2 mx-4 mb-2">
        {loading !== false && <PokemonSpinner />}
      </div>

    </>

  )
}
