import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@shopify/polaris/styles.css';
import { AppProvider } from '@shopify/polaris';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider
      features={{ newDesignLanguage: true }}
      theme={{ colorScheme: 'light' }}
    >
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
