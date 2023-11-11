import React from 'react';
import { Route} from 'react-router-dom';
import ErrorComponent from './ErrorComponent';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem('token')
                ? <Component {...props} />
                : <ErrorComponent />
        )} />
    );
};

export default PrivateRoute;