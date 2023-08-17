import React from 'react';
import ReactDOM from 'react-dom';
import Routers from 'Routers';
import GlobalData from 'GlobalData';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalData>
        <Routers />
      </GlobalData>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);