import React from 'react'
import Spinner from 'react-bootstrap/Spinner';


export const PokemonSpinner = () => {
    return (
        <Spinner animation="border" variant='primary' role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
}
