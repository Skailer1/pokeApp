import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { PokeInfoPage, PokemonsPage, PokeSearchPage, PokeTypesPage } from "../pages"

export const PokemonRoutes = () => {
  return (

    <>
    <Navbar />
    <div className="container">

    <Routes>
    <Route path="pokemons" element={<PokemonsPage/>}/>
    <Route path="pokemon-types" element={<PokeTypesPage/>}/>
    <Route path="search" element={<PokeSearchPage/>}/>
    <Route path="pokemon-info/:id" element={<PokeInfoPage/>}/>
    <Route path="/" element={<Navigate to="/search"/>}/>
</Routes>
</div>

    </>
  )
}