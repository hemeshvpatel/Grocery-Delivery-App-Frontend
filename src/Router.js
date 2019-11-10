import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import CartPage from "./pages/cartpage";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
  </Switch>
);

export default Router;
