import { Link } from "react-router-dom";


export const PokemonCard = ({ pokemon }) => {
const { 
  name, 
  id,
  image,
  typeNames, 
  base_experience,
  weight,
  height,
  abilitieNames } = pokemon;

  return (
    <div className="col-sm-3 mb-3 mb-sm-3  ">
      <div className="card  animate__animated animate__fadeIn ">
      <span >#{id}</span>
        <img
          src={image}
          className="card-img-top"
          alt={name}
        />
        <div className="card-body ">
          
          <h4 className="card-tittle d-flex justify-content-center">{name}</h4>
          <div >
            <h5>Types: </h5>
            
            {typeNames.map((type) => (
              <div key={type} className={type}>
                {type}
              </div>
            ))}

          </div>

          <Link to={`/pokemon-info/${id}`} state={{pokemon: pokemon }}>
            Details
          </Link>
        </div>
      </div>
    </div>


  )
}