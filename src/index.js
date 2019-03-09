import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './pages/Home';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/app" exact component={Home}></Route>
        </div>
    </BrowserRouter>,
document.getElementById('root'));
