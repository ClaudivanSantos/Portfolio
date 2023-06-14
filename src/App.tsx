import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material';
import { Theme } from './themes/Theme';
import { BrowserRouter } from 'react-router-dom';
import { MyRoutes } from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: {
                fontFamily: 'Poppins',
                backgroundColor: 'rgb(15, 15, 25)',
              },
            }}
          />
          <MyRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
