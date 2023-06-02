import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { pokeTypes } from '../dataTypes';


export const PokemonTypes = () => {
    
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    setValue(e)
  }

  return (
    <>

      <Dropdown onSelect={handleSelect} className='mx-4 mt-2   '>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu'>
      {pokeTypes.map(types => (
    <Dropdown.Item value={types.value} key={types.id} href={`#/Type/${types.option}`} >{types.option}</Dropdown.Item>
      ))}
      </Dropdown.Menu>
    </Dropdown>
    <h4>{value}</h4>

    </>
  )
}
