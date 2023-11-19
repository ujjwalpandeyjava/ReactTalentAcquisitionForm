import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './FormCompletion.scss';
import './index.scss'

// For real form, I will store each section data in the DB,
// if DB not allowed will store in localStorage to not loose the data in case of page refresh

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);