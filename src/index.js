import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery';
import 'popper.js'
import 'bootstrap/dist/js/bootstrap'

import {
   BrowserRouter as Router,
   Switch,
} from "react-router-dom";

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <App/>
      </Router>
   </React.StrictMode>,
   document.getElementById('root')
);

