// @ts-ignore
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import { Button, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { LottieCoding } from './ComponentLottie/Lottiecoding';

export function WhatsCanIDoForYou() {
  const matches = useMediaQuery('(min-width:960px)');

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <AnimatedOnScroll animationIn="bounceInLeft">
      <Box
        sx={{
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          marginTop: '5rem',
        }}
      >
        <Typography
          sx={{ color: '#fff', fontWeight: 'bold' }}
          variant="h5"
          gutterBottom
        >
          O que posso fazer por você
        </Typography>
        <Box
          marginLeft={matches ? '10rem' : '1rem'}
          marginRight={matches ? '10rem' : '1rem'}
          sx={{ color: '#fff' }}
          alignItems="center"
        >
          <Typography variant="body1">
            Estou aqui para intermediar seus projetos em um ambiente web. Seja
            desenvolvendo uma página pessoal ou até mesmo aplicações mais
            complexas. Esteja atualizado e tenha um design inovador, juntos
            podemos fazer muito e ficar à frente. Tecnologia e meu conhecimento
            estão aqui para facilitar e oferecer mais...
          </Typography>

          <Button
            sx={{ borderRadius: '10px', marginTop: '15px' }}
            variant="contained"
            onClick={()=> openInNewTab('mailto:claudivansantos61@gmail.com')}
          >
            Vamos trabalhar juntos?
          </Button>

          <Box
            sx={{ marginTop: '15px' }}
            display="flex"
            justifyContent="center"
          >
            <LottieCoding />
          </Box>
        </Box>
      </Box>
    </AnimatedOnScroll>
  );
}
