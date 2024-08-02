import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import "@fontsource/bebas-neue";

const theme = createTheme({
  palette: {
    primary: {
        main: 'rgb(6, 60, 169)',
    },
    secondary: {
        main: 'rgb(255, 94, 17)',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
