import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getDitto } from '../helpers/utils';



export const PokeTable = () => {

  const [stats, setStats] = useState([]);
  const [pokemon, setPokemon] = useState();

  const getPokemon = async () => {
    const pokeStats = await getDitto();
    setPokemon(pokeStats);
  }

  useEffect(() => {
    getPokemon();
  }, [])


  return (
    <div className='mx-4'>
      <Table responsive>
        <thead>
          <tr>
          <th colSpan={6}>STATS</th>

          </tr>
          <tr>

            {pokemon?.stats?.map((stat) => (
              <th key={stat?.stat?.name} className={stat.stat.name}>
                {stat.stat.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>

          <tr>
            {pokemon?.stats?.map((stat) => (
              <td key={stat?.stat?.name} className={stat?.base_stat}>{stat?.base_stat}</td>
            ))}
          </tr>


        </tbody>
      </Table>
    </div>
  )
}
