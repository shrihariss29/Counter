import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this path matches where your App.js file is located

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
