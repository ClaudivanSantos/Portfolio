import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/logo.png';

export function Copyright() {
  let currentTime = new Date();
  let year = currentTime.getFullYear();
  return (
    <Stack
      sx={{
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={Logo}
        sx={{
          width: 150,
          
        }}
      ></Box>
      <Typography sx={{color: '#fff',marginTop: '10px', marginBottom: '10px'}} variant="body2">
        Claudivan Developer - Copyright © {year}
      </Typography>
    </Stack>
  );
}
