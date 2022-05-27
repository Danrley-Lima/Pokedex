import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import React from 'react';
import { PokemonDetail } from '../../pokemon/services/interfaces/PokemonDetail';

import { Box, Chip } from '@mui/material';


interface PokedexCardProps {
  pokemon: PokemonDetail;
}

export function PokedexCard({ pokemon }: PokedexCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const navigate = useNavigate()

  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={() => navigate(`/pokemon/${pokemon.name}`)}>
        <CardHeader
          title={pokemon.name}
          subheader={pokemon.types.map((type) => (
              <Chip key={type.slot} label={type.type.name} variant="outlined"/>
          ))}
        />
        <CardMedia
          component="img"
          height="194"
          image={pokemon.sprites.front_default}
          alt="Foto do Pokemon"
        />
      </Card>
    </>
  )
}