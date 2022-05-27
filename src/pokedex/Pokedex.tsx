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



export function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonListInterface | undefined>(undefined)

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results))
  }, [])


  return (
    <>
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
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" >
        <Box mt={2}>
          <Grid container spacing={2}>
            {pokemons.map((pokemon) => (

              <React.Fragment key={pokemon.name}>
                <Grid item xs={6} lg={3} key={pokemon.name}>
                  <PokedexCard pokemon={pokemon}/>
                  {/* <CardContent >
                    <Typography variant="h5" component="div">
                      {pokemon.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={() => navigate(`/pokemon/${pokemon.name}`)} size="small">Abrir</Button>
                  </CardActions> */}
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  )
}