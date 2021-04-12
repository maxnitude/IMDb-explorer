import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FetchData from './service/FetchData';
import ServiceContext from './components/ServiceContext/ServiceContext';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.scss';

const service = new FetchData();

ReactDOM.render(
  <React.StrictMode>
    <ServiceContext.Provider value={service}>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
    </ServiceContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);