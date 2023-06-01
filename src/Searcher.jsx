import React, { useState } from 'react'

export const Searcher = () => {

const [inputValue, setInputValue] = useState('')

 const onInputChange = ({target})=>{
  setInputValue(target.value);
 } 
//  const onSubmit = (event)=>{
//   event.preve
//  }


  return (
    <form>
        <input
        type='text'
        placeholder='Buscar Pokemon'
        value={inputValue}
        onChange={onInputChange}
        >
        
    

        </input>


    </form>
  )
}
