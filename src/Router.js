import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './components/main';

export default function Router() {
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}
