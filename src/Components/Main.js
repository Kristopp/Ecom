import React, {  useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Login from "./Login"
import Home from "./Home";
import Checkout from "./Checkout";
import { auth } from "../firebase"
import { useStateValue } from "../state/StateProvider";

function Main() {
const [{}, dispatch] = useStateValue();
  //This will be a listener if user is loged in or not
  useEffect(() => { 
    auth.onAuthStateChanged(authUser => { 
      if(authUser) { 
        //if true then user loged in / was loged in
        console.log(authUser)
        dispatch({ 
          type: 'LOG_USER',
          user: authUser
        })
      } else { 
        // the user loger loged out
        dispatch({ 
          type: 'LOG_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
         <Checkout />
        </Route>
        <Route path="/">
          <Header />
        <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
