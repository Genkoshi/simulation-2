import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/Dashboard' component={Dashboard}/>
    </Switch>
)