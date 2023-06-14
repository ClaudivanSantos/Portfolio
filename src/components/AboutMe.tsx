import { Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { LottieAboutMe } from './ComponentLottie/LottieAboutMe';

export function AboutMe() {
  const matches = useMediaQuery('(min-width:960px)');
  return (
    <Box
      sx={{
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop:'7rem'

      }}
    >
      <Typography
        sx={{ color: '#fff', fontWeight: 'bold', }}
        variant="h5"
        gutterBottom
      >
        Sobre mim
      </Typography>
      <Box
        marginLeft={matches ? '12rem' : '1rem'}
        marginRight={matches ? '12rem' : '1rem'}
        sx={{ color: '#fff' }}
        alignItems="center"
      >
        <Typography variant="body1">
          Bacharelado em Análise e Desenvolvimento de Sistemas e atualmente
          cursando uma formação de Desenvolvimento Full-Stack no IGTI. Atuo como
          Desenvolvedor Front-end, onde lido com aplicações Web em React.js.
          Possuo conhecimentos sólidos em: HTML5, CSS3, JavaScript, Reactjs,
          SASS, Material UI e Git. Busco futuramente ingressar no mundo back-end
          utilizando NodeJs e no desenvolvimento de aplicações nativas.
        </Typography> 
        <Box display="flex" justifyContent="center">
          <LottieAboutMe />
        </Box>
      </Box>
    </Box>
  );
}
