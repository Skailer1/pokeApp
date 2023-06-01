import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { pokeTypes } from '../dataTypes';


export const PokemonTypes = () => {
    
  return (
    <>

      <Dropdown className='mx-4 mt-2'>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
      {pokeTypes.map(types => (
    <Dropdown.Item value={types.value} key={types.id} href={`#/Type/${types.option}`} >{types.option}</Dropdown.Item>
      ))}
      </Dropdown.Menu>
    </Dropdown>

    </>
  )
}
