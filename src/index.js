import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Estimate from './Estimate';
import EstimateNew from './EstimateNew';
import reportWebVitals from './reportWebVitals';
import LoginForm from './LoginForm';


import Appax from './Appax';
import FormContainer from "./FormContainer";
import ControlledFormComponent from "./ControlledFormComponent";
import {MyInput} from "./MyInput";
// import Inn from './Inn';
// import React, { useEffect, useState } from 'react';

import RouterMy from './componentsInput/RouterMy';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

// var cors = require('cors')
// app.use(cors())

root.render(
  <React.StrictMode>
    {/*<App />*/}

      {/* Рабочее !*/}
      {/*<Appax />*/}


      {/*<Estimate />*/}

      {/*<LoginForm />*/}

      {/*<div>*/}
      {/*    <FormContainer />*/}
      {/*</div>*/}

      {/*<Inn/>*/}

      {/*<ControlledFormComponent />*/}


      <EstimateNew />
      <MyInput />
      <RouterMy />


  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
