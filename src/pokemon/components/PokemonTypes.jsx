import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { pokeTypes } from '../data/dataTypes';
import { PokemonTypeList } from './PokemonTypeList';


export const PokemonTypes = () => {

  const saveTypeId = () =>{localStorage.setItem('pokemonsTypeId', pokemonTypeId)}
  const saveTypeName = () => {localStorage.setItem('pokemonTypeName', pokemonTypeName)}
  const [pokemonTypeId, setPokemonTypeId] = useState(()=> localStorage.getItem('pokemonsTypeId') || '');
  const [pokemonTypeName, setPokemonTypeName] = useState(() => localStorage.getItem('pokemonsTypeName') ||'');
  
  useEffect(() => {
    saveTypeId();

  }, [pokemonTypeId]);

  useEffect(() => {
    saveTypeName();

  }, [pokemonTypeName]);

  useEffect(() => {

    onClickHandle(pokemonTypeId, pokemonTypeName)

  }, [pokemonTypeId, pokemonTypeName])


  const onClickHandle = (id, name) => {
    setPokemonTypeId(id);
    setPokemonTypeName(name);

  };


  return (
    <>

      <Dropdown className='mx-4 mt-2   '>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Choose Pokemon Type
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdown-menu'>
          {pokeTypes.map(types => (
            <Dropdown.Item
              onClick={() => onClickHandle(types.value, types.option)}
              value={types.value}
              key={types.id}
              href={`#/Type/${types.option}`}
            >
              {types.option}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {pokemonTypeId !== null && <PokemonTypeList pokemonTypeId={pokemonTypeId} pokemonTypeValue={pokemonTypeName} />}

    </>
  )
}
