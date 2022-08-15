import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Main from './components/main';
import Auth from './components/auth';
import Login from './components/login';
import Registration from './components/registration';
import Program from './components/program';
import PrivateRoute from './route/PrivateRouter';
import Exercises from './components/exercises';

export default function Router() {
    const isAuth =
        localStorage.getItem('email') === 'bruttodmin@mail.ru' &&
        localStorage.getItem('password') === 'adminbrutto';
    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/auth">
                    {isAuth ? (
                        <Redirect
                            to={{
                                pathname: '/',
                            }}
                        />
                    ) : (
                        <Auth />
                    )}
                </Route>
                <Route path="/login">
                    {isAuth ? (
                        <Redirect
                            to={{
                                pathname: '/',
                            }}
                        />
                    ) : (
                        <Login />
                    )}
                </Route>
                <Route path="/registration">
                    {isAuth ? (
                        <Redirect
                            to={{
                                pathname: '/',
                            }}
                        />
                    ) : (
                        <Registration />
                    )}
                </Route>
                <PrivateRoute exact path="/program">
                    <Program />
                </PrivateRoute>
                <PrivateRoute path="/program/:week/:date/:block">
                    <Exercises />
                </PrivateRoute>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </>
    );
}
