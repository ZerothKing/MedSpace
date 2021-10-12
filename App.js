import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import Login from "./Login";
import Seller_login from "./Seller_login";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/cart">
            <Header />
            <Cart />
            </Route>
            <Route path="/Customer_login">
              <Login />
            </Route>

            <Route path="/Seller_login">
              <Seller_login />
            </Route>

            <Route path="/Seller_login">
              <Seller_login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>
    
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
