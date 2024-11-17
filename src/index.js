import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Estimate from './Estimate';
import EstimateNew from './EstimateNew';
import reportWebVitals from './reportWebVitals';


import Appax from './Appax';
// import React, { useEffect, useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// var cors = require('cors')
// app.use(cors())

root.render(
  <React.StrictMode>
    {/*<App />*/}

      {/* Рабочее !*/}
      {/*<Appax />*/}

      <EstimateNew />

      {/*<Estimate />*/}

  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
