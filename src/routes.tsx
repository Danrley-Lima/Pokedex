import { Pokedex } from './pokedex/Pokedex';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { PokemonDetails } from './PokemonDetails';


export function Rotas() {
  return (
      <Routes>
        <Route path='/' element={<Pokedex />} />
        <Route path="/pokemon/:name" element={<PokemonDetails/>} />
      </Routes>
  )
}

