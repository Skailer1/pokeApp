import { Link } from "react-router-dom";


export const Card = ({ pokemon }) => {

  return (
    <div className="col-sm-3 mb-3 mb-sm-3 mx-4">
      <div className="card">
        <img
          src={pokemon?.sprites?.other["official-artwork"]?.front_default}
          className="card-img-top"
          alt={pokemon.name}
        />
        <div className="card-body">
          <span>id: {pokemon.id}</span>
          <h4 className="card-tittle">{pokemon.name}</h4>
          <div>
            <h5>Types: </h5>
            {pokemon?.types?.map((type) => (
              <div key={type?.type?.name} className={type.type.name}>
                {type.type.name}
              </div>
            ))}
          </div>

          <Link to={`/pokemon-info/${pokemon.id}`} state={{pokemon: pokemon}}>
            Details
          </Link>
        </div>
      </div>
    </div>


  )
}