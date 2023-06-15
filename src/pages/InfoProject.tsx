import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Header } from '../layout/Header';
import { Copyright } from '../components/Copyright';
import { AiFillGithub } from 'react-icons/ai';
import { BiNavigation } from 'react-icons/bi';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { ProjectsArray } from '../utils/Array';

interface Projects {
  github: string;
  img: string;
  link: string;
  name: string;
  src: string;
  tec1: string;
  tec2: string;
  tec3: string;
  youtube?: string;
}

export function InfoProject() {
  const matches = useMediaQuery('(min-width:500px)');
  const { id } = useParams();
  const [project, setProject] = useState<Projects[]>([]);

  function filterProject() {
    const newProject = ProjectsArray.filter(project => project.name === id);
    setProject(newProject);
  }

  const openNewTab = (link: string) => {
    window.open(link, '_blank');
  };

  useEffect(() => {
    filterProject();
  }, []);

  return (
    <Box>
      <Header menuVisible={false} />
      {project.map(project => (
        <Box
          sx={{ marginBottom: '25px' }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingTop={'6rem'}
          position="relative"
        >
          <Box>
            <Typography sx={{ color: '#fff', fontWeight: 'bold' }} variant="h4">
              {project.name}
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              height: matches ? '30%' : '50%',
              width: matches ? '40%' : '70%',
              position: 'relative',
              '&:hover .botao': { opacity: 1 },
            }}
            src={project.img}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              marginBottom: '30px',
            }}
          >
            <Button
              sx={{ marginBottom: '10px' }}
              variant="contained"
              color="secondary"
              size="medium"
              onClick={() => openNewTab(project.github)}
            >
              Ver projeto no GitHub <AiFillGithub size={20} />
            </Button>
            {project.link ? (
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                onClick={() => openNewTab(project.link)}
              >
                Acessar projeto <BiNavigation size={20} />
              </Button>
            ) : (
              ''
            )}
          </Box>

          {project.youtube ? (
            <>
              <Typography
                sx={{ color: '#fff', marginBottom: '10px' }}
                variant="h5"
              >
                Vídeo do projeto
              </Typography>
              <ReactPlayer
                url={project.youtube}
                controls
                width={matches ? "560px" : '90%'}
                height={matches ? "315px" : '200px' }
              />
            </>
          ) : (
            ''
          )}

          <Typography
            sx={{ color: '#fff', marginBottom: '10px', marginTop: '20px' }}
            variant="h5"
          >
            Tecnologias usadas
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 4px gray',
              }}
            >
              <Box
                component="img"
                sx={{
                  height: matches ? 60 : 40,
                }}
                src={project.tec1}
              />
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 4px gray',
              }}
            >
              <Box
                component="img"
                sx={{
                  height: matches ? 60 : 40,
                  marginRight: '20px',
                  marginLeft: '20px',
                }}
                src={project.tec2}
              />
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.1,
                textShadow: '0px 0px 4px gray',
              }}
            >
              <Box
                component="img"
                sx={{
                  height: matches ? 60 : 40,
                }}
                src={project.tec3}
              />
            </motion.div>
          </Box>
        </Box>
      ))}

      <Copyright />
    </Box>
  );
}
