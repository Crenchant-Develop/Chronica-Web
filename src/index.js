import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);