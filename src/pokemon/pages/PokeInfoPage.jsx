import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PokeTable } from '../components/PokeTable'

export const PokeInfoPage = () => {

  const data = useLocation()
  const {pokemon} = data.state
  const navigate = useNavigate();

  const onNavigateBack = () => {
    
      navigate(-1);
    
  }

  return (
    <div className='row mt-5'>
      <div className="col-4">
      <img
          src={pokemon?.sprites?.other["official-artwork"]?.front_default}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={pokemon.name}
        />
      </div>
      <div className="col-8">
        <h3>{pokemon.name}</h3>
        <PokeTable/>
        <h5 className='mt-3'>Pokemon ID</h5>
        <p>{pokemon.id}</p>
        <button
          className='btn btn-outline-primary'
          onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>

  )
}
