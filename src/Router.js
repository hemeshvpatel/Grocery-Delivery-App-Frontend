import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage";
import CartPage from "./pages/cartpage";
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import CheckoutPage from "./pages/checkoutpage";
import OrdersPage from "./pages/orderspage";
import OrderHistory from "./pages/orderhistorypage";

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/checkout" component={CheckoutPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/register" component={RegisterPage} />
    <Route exact path="/orderhistory" component={OrderHistory} />
    <Route exact path="/orders/:id" component={OrdersPage} />
  </Switch>
);

export default Router;
