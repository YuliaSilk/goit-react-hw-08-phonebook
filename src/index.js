import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom';


const theme = {
  colors: {
    main: '#132A13',
    backgraund: '#081c15',
    header:'#d9ed92',
    acent: '#fff',
    error: '#d90429',
    text:'#ECF39E',
    border: '#90A955',
    inputColor: '#31572C',
    registerBackg: '#f2fbec',
  },

  radii: {
    md: '15px',
  },
  // box-shadow: 1px 1px 3px 2px #ad0467;
spacing: value => `${value * 4}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
   <BrowserRouter basename='goit-react-hw-08-phonebook'>
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
    <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>
);
