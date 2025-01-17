import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue color for primary button, etc.
    },
    secondary: {
      main: '#d32f2f', // Red color for secondary button, etc.
    },
    background: {
      default: '#f4f6f8', // Light background color for the page
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
