import React from 'react';
import {  
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

export default function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}