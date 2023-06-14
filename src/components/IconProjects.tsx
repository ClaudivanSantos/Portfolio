import { Avatar, Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export interface IProjectProps {
  src: string;
  link: string;
  name: string;
  github: string;
  tec1: string;
  tec2: string;
  tec3: string;
}

export const IconProjects: React.FC<IProjectProps> = ({
  src,
  name,
}) => {
  const matches = useMediaQuery('(min-width:620px)');
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.1,
          textShadow: '0px 0px 4px gray',
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{
            cursor: 'pointer',
            margin: '5px',
            backgroundColor: '#191b1c',
            borderRadius: '0.4rem',
          }}
        >
          <Box>
            <Typography sx={{ marginTop: '10px' }} color="white">
              {name}
            </Typography>
          </Box>
          <Box
            component="img"
            sx={{
              height: matches ? 200 : 150,
            }}
            src={src}
            onClick={() => navigate(`/project/${name}`)}
          />
        </Box>
      </motion.div>
    </>
  );
};
