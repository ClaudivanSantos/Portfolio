import { Box, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';

interface IIconProps {
  Icon: IconType;
  urlOpenTab: string
}

export const IconContact: React.FC<IIconProps> = ({ Icon, urlOpenTab }) => {
  const matches = useMediaQuery('(min-width:680px)');

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Box display="flex" margin={matches ? 7 : 2}>
      <motion.div
        whileHover={{
          scale: 1.1,
          textShadow: '0px 0px 4px gray',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#191b1c',
            borderRadius: '10rem',
            padding: '10px',
          }}
          onClick={()=> openInNewTab(urlOpenTab)}
        >
          <Icon
            color="#fff"
            size={matches ? 40 : 30}
            style={{ cursor: 'pointer', display: 'flex' }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};
