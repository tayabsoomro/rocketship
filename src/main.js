import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
      <BrowserRouter>
        <Route path='/app' component={App}/>
      </BrowserRouter>,
      document.getElementById('app')
  );
});
