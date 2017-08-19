import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import {BrowserRouter, Route} from 'react-router-dom';
import TabBar from "./TabBar";
import { Well } from 'react-bootstrap';
import registerServiceWorker from './registerServiceWorker';

const routes = (
    <BrowserRouter>
      <div>
        <Well>Rocketship</Well>
        <Route exact path='/' component={Login}/>
        <Route path='/:userID' component={TabBar}/>
      </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

registerServiceWorker();
