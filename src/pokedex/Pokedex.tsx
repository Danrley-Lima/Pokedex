import axios from "axios"
import { useState, useEffect } from "react"


interface PokemonListInterface {
    name: string,
    url: string,
}



export function Pokedex() {
    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([])
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined)
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<any | undefined>(undefined)

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => setPokemons(response.data.results))
    }, [])

    useEffect(() => {
        if (!selectedPokemon) return;

        axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon.name}`).then((response) => setSelectedPokemonDetails(response.data))
        alert(selectedPokemon.name)

    }, [selectedPokemon])



    return (
        <>
            <h1>Pokedex</h1>

            Pokemons: <br></br>
            {pokemons.map((pokemon) => {
                return (
                    <button key={pokemon.name} onClick={() => setSelectedPokemon(pokemon)}>{pokemon.name}</button>
                )
            }
            )}

            <h2>Pokemon Selecionado: {selectedPokemon?.name ? selectedPokemon.name : "Nenhum Pokemon selecionado"}</h2>
            {JSON.stringify(selectedPokemonDetails, undefined, 2)}
        </>
    )
}