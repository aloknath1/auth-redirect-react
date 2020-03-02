import React from 'react';
import Login from './Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const fakeAuth = {
    isAuthenticated:  false,
    authenticate(cb){
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100);    //fake aync
    },
    signout(cb){
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);    //fake aync
    }
};

export default function PrivateRoute({children, ...rest}){
    return (
        <Route
            {...rest}
            render={({location}) => 
                fakeAuth.isAuthenticated ? (
                    children
                ) : 
                (
                    <Redirect to={{
                        pathname: "/login",
                        state : { from: location}
                    }}                    
                     />
                )
            }
        />
    );
}