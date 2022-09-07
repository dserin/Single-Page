import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../../../Projeler/sidebar/src/App';
import { AppProvider } from '../../../Projeler/sidebar/src/context';
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
