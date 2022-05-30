import React from "react"
import { useState, useEffect } from "react"
import { PokemonDetail } from "../pokemon/services/interfaces/PokemonDetail"
import { listPokemons, PokemonListInterface } from "../pokemon/services/listPokemons"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { PokedexCard } from "./components/PokedexCard"
import { useQuery } from "react-query";
import { Button, CircularProgress, LinearProgress } from "@mui/material";



export function Pokedex() {
  // const [pokemons, setPokemons] = useState<PokemonDetail[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined)


  const {
    data,
    isLoading,
    isRefetching,
    isStale,
    refetch
  } = useQuery(`listpokemons`, listPokemons, {
    onSuccess: (data) => console.log("Sucesso!"),
    onError: (err) => console.log("Erro!"),
    onSettled: (data) => console.log("Settled!")
  })


  // useEffect(() => {
  //   listPokemons().then((response) => setPokemons(response.results))
  // }, [])


  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#da0926" }}>
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
        </Toolbar>
        {isRefetching && <LinearProgress variant='indeterminate' color='secondary' />}
      </AppBar>

      <Container maxWidth="lg" >
        <div style={{ marginTop: '2em' }}></div>
        {isStale && (<Button disabled={isRefetching} variant="outlined" onClick={() => refetch()}>Refetch</Button>)}
        <div style={{ marginTop: '2em' }}></div>
        {!isLoading ? (
          <Box mt={2}>
            <Grid container spacing={2}>
              {data?.results.map((pokemon) => (

                <React.Fragment key={pokemon.name}>
                  <Grid item xs={12} sm={6} md={4} lg={2} key={pokemon.name}>
                    <PokedexCard pokemon={pokemon} />
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Box>
        ) : (
          <div><CircularProgress /></div>
        )}
      </Container>
    </>
  )
}