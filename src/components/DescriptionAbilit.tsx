import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

interface IDescriptionProps{
    title: string;
    description: string;
}

export const DescriptionAbilit: React.FC<IDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          paddingTop: { xs: '3rem', md: '12px', xl: '50px' },
          paddingBottom: { xs: '3rem', md: '10px', xl: '50px' },
        }}
      >
        <Box
          sx={{
            backgroundColor: '#242732',
            borderRadius: '20px',
            paddingTop: '33px',
            position: 'sticky',
          }}
          boxShadow={3}
          alignItems="center"
          width={{ xs: '22rem', md: '35rem' }}
          height={{ xs: '18rem', md: '18rem' }}
        >
          <Typography
            sx={{
              textAlign: 'center',
              marginBottom: '25px',
              fontWeight: 'bold',
              color: '#fff',
            }}
            variant="h5"
          >
            {title}
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: '#fff',
              marginLeft: '10px',
              marginRight: '10px',
            }}
            variant="body1"
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
