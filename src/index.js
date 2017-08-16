import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const routes = (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

registerServiceWorker();
