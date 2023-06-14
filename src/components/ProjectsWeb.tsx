// @ts-ignore
import { AnimatedOnScroll } from 'react-animated-css-onscroll';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { IconProjects } from './IconProjects';
import { ProjectsArray } from '../utils/Array';

export function ProjectsWeb() {
  const matches = useMediaQuery('(min-width:500px)');
 

  return (
    <Box
      marginLeft={matches ? '3rem' : '1rem'}
      marginRight={matches ? '3rem' : '1rem'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '5rem',
      }}
    >
      <AnimatedOnScroll animationIn="bounceInLeft">
        <Typography
          sx={{ color: '#fff', fontWeight: 'bold', marginBottom: '2rem' }}
          variant="h5"
          gutterBottom
        >
          Projetos
        </Typography>
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {ProjectsArray.map(project => (
            <IconProjects
              src={project.img}
              link={project.link ? project.link : ''}
              name={project.name}
              github={project.github}
              tec1={project.tec1}
              tec2={project.tec2}
              tec3={project.tec3}
            />
          ))}
        </Box>
      </AnimatedOnScroll>
    </Box>
  );
}
