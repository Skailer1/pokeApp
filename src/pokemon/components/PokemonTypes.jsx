import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { pokeTypes } from '../data/dataTypes';
import { PokemonList } from './PokemonList';


export const PokemonTypes = () => {
    
   const [value,setValue]=useState('');

  // const onClickHandle = (event) =>{
    
  //   setValue(event.target.value);
  //   console.log(value);
  //   }
  
  
  // useEffect(() => {
  //   onClickHandle()
  
   
  // }, [value])
  
  
  return (
    <>

      <Dropdown  className='mx-4 mt-2   '>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Choose Pokemon Type
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu'>
      {pokeTypes.map(types => (
    <Dropdown.Item onClick={() => setValue(types.value)} value={types.value} key={types.id} href={`#/Type/${types.option}`} >{types.option}</Dropdown.Item>
      ))}
      </Dropdown.Menu>
    </Dropdown>
    {/* <h4>{value}</h4> */}

    {value != null && <PokemonList typeId={value}  />}

    </>
  )
}
