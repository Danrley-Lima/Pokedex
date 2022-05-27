import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import { PokemonDetail } from "./pokemon/services/interfaces/PokemonDetail";
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from './pokemon/services/getPokemonDetails';

export function PokemonDetails() {
  const { name } = useParams()
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined)

  useEffect(() => {
    if (!name) return;

    getPokemonDetails(name).then((response) => setSelectedPokemonDetails(response))

  }, [name])

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
            {name}
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" >
        <Box mt={2}>
          <img width="100%" height="auto" src={selectedPokemonDetails?.sprites.front_default} alt="Foto do Pokemon selecionado" />
        </Box>
        <Typography variant="h2">
          {selectedPokemonDetails?.name}
        </Typography>
        <Typography>
          <Box>
            Tipos:
            {selectedPokemonDetails?.types.map((type) => (
              <Typography>{type.type.name}</Typography>
            ))}
          </Box>
          <Box>
            Altura:
            {selectedPokemonDetails?.height}
          </Box>
          <Box display="flex" flexDirection="row">
            Espécie:
            {selectedPokemonDetails?.species.name}
          </ Box>

          <Box display="flex" flexDirection="row">
            Peso:
            {selectedPokemonDetails?.weight}
          </ Box>
          {selectedPokemonDetails?.abilities.map((ability) => (
            <Typography>
              {ability.ability.name}
            </Typography>
          ))}


        </Typography>
      </Container>
      {/* <h2>Pokemon Selecionado: {selectedPokemon?.name ? selectedPokemon.name : "Nenhum Pokemon selecionado"}</h2> */}
      {/* {JSON.stringify(selectedPokemonDetails?.sprites.front_default, undefined, 2)} */}
    </>
  )
}