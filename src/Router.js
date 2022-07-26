import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './components/main';
import Auth from './components/auth';
import Login from './components/login';

export default function Router() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/auth">
                    <Auth />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}
