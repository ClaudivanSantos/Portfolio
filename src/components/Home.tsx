// @ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll';
// @ts-ignore
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import { Box, Button, useMediaQuery } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineUser } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import pdf from '../assets/cv.pdf';
import { LottieCode } from './ComponentLottie/LottieCode';

export function Home() {
  const [showHello, setShowHello] = useState('');
  const [showName, setShowtName] = useState('');
  const [showDev, setShowDev] = useState('')

  const matches = useMediaQuery('(min-width:960px)');
  return (
    <Box
      display={matches ? 'flex' : ''}
      justifyContent={matches ? 'space-between' : ''}
      paddingTop={matches ? '10rem' : '7rem'}
      sx={{ a: { textDecoration: 'none' } }}
    >
      <Box textAlign={matches ? 'left' : 'center'}>
        <TypeAnimation
          sequence={[
            'Olá eu sou o ',
            1000,
            () => {
              setShowHello('ok');
            },
            'Olá eu sou o',
          ]}
          style={{ fontSize: '2em', color: '#fff', margin: 0 }}
          wrapper="h2"
          cursor={false}
          repeat={0}
        />
        {showHello == 'ok' ? (
          <TypeAnimation
            sequence={[
              'Claudivan :)',
              1000,
              () => {
                setShowtName('ok');
              },
              'Claudivan :)',
            ]}
            style={{ fontSize: '2em', color: '#4c1499', margin: 0 }}
            wrapper="h2"
            cursor={false}
            repeat={0}
          />
        ) : (
          ''
        )}

        {showName == 'ok' ? (
          <TypeAnimation
            sequence={[
              'Desenvolvedor',
              1000,
              () => {
                setShowDev('ok');
              },
              'Desenvolvedor',
            ]}
            style={{ fontSize: '2em', color: '#827d7c', margin: 0 }}
            wrapper="h3"
            cursor={false}
            repeat={0}
          />
        ) : (
          ''
        )}
        {showDev == 'ok' ? (
          <TypeAnimation
            sequence={[
              'Front-End',
              2000,
              'Back-End',
              2000
            ]}
            style={{ fontSize: '2em', color: '#827d7c', margin: 0 }}
            wrapper="h3"
            speed={50}
            repeat={Infinity}
          />
        ) : (
          ''
        )}
        {showDev == 'ok' ? (
          <AnimatedOnScroll animationIn="bounceInLeft">
            <Stack
              marginTop="17px"
              spacing={2}
              alignItems={matches ? 'left' : 'center'}
            >
              <a href={pdf} download>
                <Button sx={{ width: '12rem' }} variant="contained">
                  <AiOutlineArrowDown /> Download CV
                </Button>
              </a>
              <AnchorLink href="#contact">
              <Button
                sx={{
                  width: '12rem',
                  display: 'flex',
                  justifyContent: 'center',
                }}
                variant="contained"
              >
                <AiOutlineUser />
                Entrar em contato
              </Button>
              </AnchorLink>
            </Stack>
          </AnimatedOnScroll>
        ) : (
          ''
        )}
      </Box>
      <Box display="flex" justifyContent="center" marginTop={matches ? 0 : 10}>
        <LottieCode />
      </Box>
    </Box>
  );
}
