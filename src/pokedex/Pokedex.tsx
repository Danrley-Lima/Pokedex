import axios from "axios"
import { useState, useEffect } from "react"
import { getPokemonDetails } from "../pokemon/services/getPokemonDetails"
import { PokemonDetail } from "../pokemon/services/interfaces/PokemonDetail"
import { listPokemons, PokemonListInterface } from "../pokemon/services/listPokemons"



export function Pokedex() {
    const [pokemons, setPokemons] = useState<PokemonListInterface[]>([])
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined)
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined)

    useEffect(() => {
        listPokemons().then((response) => setPokemons(response.results))
    }, [])

    useEffect(() => {
        if (!selectedPokemon) return;

        getPokemonDetails(selectedPokemon.name).then((response) => setSelectedPokemonDetails(response))

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