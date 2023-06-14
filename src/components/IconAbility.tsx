import { Box, Typography, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

interface ILogoProps {
  src: string;
  onClick: () => void;
}

export const LogoAbility: React.FC<ILogoProps> = ({ src, onClick }) => {
  const matches = useMediaQuery('(min-width:500px)');

  return (
    <Box display="flex">
      <motion.div
        whileHover={{
          scale: 1.1,
          textShadow: '0px 0px 4px gray',
        }}
      >
        <Box
          component="img"
          sx={{
            height: matches ? 80 : 70,
            backgroundColor: '#191b1c',
            borderRadius: '0.4rem',
            padding: '10px',
            margin: '5px',
            cursor: 'pointer',
          }}
          src={src}
          onClick={onClick}
        />
      </motion.div>
    </Box>
  );
};
