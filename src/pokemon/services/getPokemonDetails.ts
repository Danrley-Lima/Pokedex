import axios from "axios";
import { PokemonDetail } from "./interfaces/PokemonDetail";


export async function getPokemonDetails(name: string | undefined): Promise<PokemonDetail> {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`

    const response = await axios.get<PokemonDetail>(endpoint)

    await new Promise((resolve) => setTimeout(resolve, 1500));

    return response.data
}

