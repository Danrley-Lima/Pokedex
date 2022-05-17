import axios from "axios"
import { useState, useEffect } from "react"
import { getPokemonDetails } from "../pokemon/services/getPokemonDetails"
import { PokemonDetail } from "../pokemon/services/interfaces/PokemonDetail"
import { listPokemons, PokemonListInterface } from "../pokemon/services/listPokemons"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


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
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Pokedex
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>


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