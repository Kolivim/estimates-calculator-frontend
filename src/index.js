import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './estimate/App';
// import App from './test/App';
import Estimate from './Estimate';
// import EstimateNew from './EstimateNew';
import EstimateNew from './estimate/EstimateNew';
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
// import AppTms from "./tms/AppTms";
import AppTms from "./estimate/AppTms";

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


      {/** Рабочее, вывод всех рассчётов */}
      {/*<EstimateNew />*/}

      {/** Рабочее: Поле для ввода UUID и перехода на страницу с ним */}
      {/*<MyInput />*/}

      {/** Рабочее, предлагаются варианты все рассчёты/поиск рассчёта */}
      <RouterMy />

      {/** Роутер: Слушает опубликованные в нём адреса и при обращении к ним с браузера переходит к соответствующей JS'ке */}
      <AppTms />

      {/** Рабочее */}
      {/*<App />*/}

  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
