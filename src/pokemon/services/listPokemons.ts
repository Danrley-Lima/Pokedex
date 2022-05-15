import axios from "axios";


export interface PokemonListInterface {
    name: string,
    url: string,
}

interface listPokemonsInterface {
    count: number;
    next: null | string;
    previous: null | string;
    results: PokemonListInterface[],
}


export async function listPokemons(): Promise<listPokemonsInterface> {
    const endpoint = `https://pokeapi.co/api/v2/pokemon`

    const response = await axios.get<listPokemonsInterface>(endpoint)

    return response.data
}