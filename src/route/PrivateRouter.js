import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
    const isAuth =
        localStorage.getItem('email') === 'bruttodmin@mail.ru' &&
        localStorage.getItem('password') === 'adminbrutto';
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuth ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/auth',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}
