import { Route, Routes } from "react-router-dom"
import { PokemonRoutes } from "../pokemon/routes/PokemonRoutes"
import { LoginPage } from "../auth/pages/LoginPage"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
<>
<Routes>


    <Route path="login" element={
      <PublicRoute>
        <LoginPage/>
      </PublicRoute>
    }/>

    <Route path="/*" element = {
      <PrivateRoute>

        <PokemonRoutes/>

      </PrivateRoute>
    } />



     
</Routes>
</>  
)

}