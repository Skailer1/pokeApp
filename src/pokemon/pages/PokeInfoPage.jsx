import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PokeTable } from '../components/PokeTable'

const getSavedPokemon = () => {
  const savedPokemon = localStorage.getItem('pokemonInfo');
  return JSON.parse(savedPokemon);
}


export const PokeInfoPage = () => {

  const data = useLocation();
  const storedPokemon = getSavedPokemon();
  // this const pass the stored pokemon if available OR pass the data state retreived from Link (details).
  const pokemon = storedPokemon || data.state?.pokemon;
  const navigate = useNavigate();
  const savePokemonInfo = () => { localStorage.setItem('pokemonInfo', JSON.stringify(pokemon)) }
  const cleanPokemonInfo = () => { localStorage.removeItem('pokemonInfo') }

  const onNavigateBack = () => {
    navigate(-1);
    cleanPokemonInfo();
  };



  useEffect(() => {
    if (!storedPokemon && pokemon) {
      savePokemonInfo();
    }
  }, [storedPokemon, pokemon]);



  return (
    <div className='row mt-5'>
      <div className="col-sm-6 col-md-3 col-lg-3">
        <img
          src={pokemon.image}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={pokemon.name}
        />
      </div>
      <div className="col-sm-6 col-md-3 col-lg-3 animate__animated animate__fadeIn">
        <h3>{pokemon.name.toUpperCase()} <small>#{pokemon.id}</small> </h3>

        <ul className='list-group '>
          <li className='list-group-item'><b>Base Experience: </b> {pokemon.base_experience}</li>
          <li className='list-group-item'><b>Weight: </b> {pokemon.weight}</li>
          <li className='list-group-item'><b>Height: </b> {pokemon.height}</li>
        </ul>
        <h5 className='mt-3 ms-2'>Abilities</h5>
        {pokemon.abilitieNames.map((abilities) => (
          <div key={abilities} className="ms-2">
            <li> {abilities}</li>
          </div>
        ))}

      </div>
      <div className="col-sm-12 col-md-6 col-lg-6  mt-4   animate__animated animate__fadeIn">
        <PokeTable id={pokemon.id} />
        <button
          className='btn btn-outline-primary  mb-2  mt-4'
          onClick={onNavigateBack}>
          Back
        </button>
      </div>


    </div>

  )
}
