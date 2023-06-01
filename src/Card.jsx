export const Card = (props) => {
// console.log(props);
let pokemon = props;
  return (
<div className="row mx-2 ">
  {/* <div className="col-sm-4 mb-3 mb-sm-0">

  </div> */}
  <div className="col-sm-4 mb-3 mb-sm-0">
 <div className="card"  >
  <img src={pokemon?.infoPokemon?.sprites?.front_default} className="card-img" />
  <div className="card-body">
    <p className="card-text">id: {pokemon.infoPokemon.id}</p>
    <p className="card-text">name: {pokemon.infoPokemon.name}</p>
  </div>
  {/* <div className="col-sm-4 mb-3 mb-sm-0">

</div> */}
</div> 
</div> 
</div> 
 
    
  )
}
