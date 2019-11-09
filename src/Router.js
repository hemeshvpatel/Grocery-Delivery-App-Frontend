import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import CartPage from "./pages/cartpage";
import LoginPage from "./pages/loginpage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/login" component={LoginPage} />
  </Switch>
);

export default Router;
