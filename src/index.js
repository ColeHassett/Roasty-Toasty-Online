import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';

import './style.css';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" exact component={Home}></Route>
        </div>
    </BrowserRouter>,
document.getElementById('root'));
