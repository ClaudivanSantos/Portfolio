// @ts-ignore
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import { Box, Typography } from '@mui/material';
import { MdEmail } from 'react-icons/md';
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineGithub,
} from 'react-icons/ai';
import { IconContact } from './IconContact';

export function Contact() {
  return (
    <Box
      sx={{
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: '5rem',
      }}
    >
      <AnimatedOnScroll animationIn="bounceInLeft">
        <Typography
          sx={{ color: '#fff', fontWeight: 'bold' }}
          variant="h5"
          gutterBottom
        >
          Contato
        </Typography>
        <Box display="flex" justifyContent="center">
          <IconContact
            Icon={MdEmail}
            urlOpenTab="mailto:claudivansantos61@gmail.com"
          />

          <IconContact
            Icon={AiFillLinkedin}
            urlOpenTab="https://www.linkedin.com/in/claudivansantos/"
          />

          <IconContact
            Icon={AiFillInstagram}
            urlOpenTab="https://www.instagram.com/claudivan.dev/"
          />

          <IconContact
            Icon={AiOutlineGithub}
            urlOpenTab="https://github.com/ClaudivanSantos"
          />
        </Box>
      </AnimatedOnScroll>
    </Box>
  );
}
