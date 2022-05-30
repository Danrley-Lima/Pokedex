import axios from "axios";
import { getPokemonDetails } from "./getPokemonDetails";
import { PokemonDetail } from "./interfaces/PokemonDetail";


export interface PokemonListInterface {
  name: string,
  url: string,
}

interface listPokemonsInterface {
  count: number;
  next: null | string;
  previous: null | string;
  results: PokemonDetail[],
}


export async function listPokemons(): Promise<listPokemonsInterface> {
  const endpoint = `https://pokeapi.co/api/v2/pokemon`

  const response = await axios.get<listPokemonsInterface>(endpoint)

  const promiseArr = response.data.results.map(({ name }) => getPokemonDetails(name))
  const resultsPromise = await Promise.all(promiseArr)

  // await 2 seconds to simulate a slow connection

  return {
    ...response.data,
    results: resultsPromise
  }
}