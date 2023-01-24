import React from 'react';
// import ReactDOM from 'react-dom/client';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";

const APP = (
<HashRouter>
  <App />
</HashRouter>);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
// );
