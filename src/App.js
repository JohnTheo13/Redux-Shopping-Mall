import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './data/store';
import { theme } from './config';
import Home from './containers/Home';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  </Provider>
);

export default App;
