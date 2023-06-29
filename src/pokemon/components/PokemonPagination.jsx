import Pagination from 'react-bootstrap/Pagination';



export const PokemonPagination = ({pokemon}) => {
    


  return (
    <Pagination size="lg">
      <Pagination.First />
      <Pagination.Prev />

      <Pagination.Item>1</Pagination.Item>

     

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>

    )
}
