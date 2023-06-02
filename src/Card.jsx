export const Card = ({id,name,image,type}) => {

  return (
<div className="col-sm-3 mb-3 mb-sm-3 mx-4">

  <div className="card">
 <div className="row no-gutter"  >
  <img src={image} className="card-img" alt={name} />
  <div className="card-body">
    <p className="card-text">id: {id}</p>
    <p className="card-text">name: {name}</p>
    <small> Type: {type}</small>
  </div>

</div> 
</div> 
</div> 
 
    
  )
}