// @ts-ignore
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import { Box, Typography } from '@mui/material';
import 'animate.css/animate.min.css';
import { LogoAbility } from './IconAbility';
import { DescriptionAbilit } from './DescriptionAbilit';
import { useState } from 'react';
import { Abilities } from '../utils/Array';

export function Ability() {
  const [number, setNumber] = useState(0);
  const [title, setTitle] = useState('Habilidades');
  const [description, setDescription] = useState(
    'Clique em alguma habilidade acima para ver sua descrição'
  );

  function handleClick(
    title: string,
    description: string,
    number: number
  ): void {
    setTitle(title);
    setDescription(description);
    setNumber(number);
  }

  return (
    <Box textAlign="center" marginTop="5rem">
      <AnimatedOnScroll animationIn="bounceInLeft">
        <Typography
          sx={{ color: '#fff', fontWeight: 'bold', marginBottom: '2rem' }}
          variant="h5"
          gutterBottom
        >
          Habilidades
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {Abilities.map(Ability => (
            <LogoAbility
              key={Ability.id}
              onClick={() =>
              handleClick(Ability.title, Ability.description, Ability.id)
              }
              src={Ability.src}
            />
          ))}
        </Box>

        <DescriptionAbilit title={title} description={description} />
      </AnimatedOnScroll>
    </Box>
  );
}
