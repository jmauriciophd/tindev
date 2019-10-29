import React from 'react';
import {BrowserRouter,Router} from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';

export default function Router(){
        return (
            <BrowserRouter>
                <Router  path="/" exact  component={Login}  />
                <Router path="/dev/:id" component={Main} />
            </BrowserRouter>
        );        
}