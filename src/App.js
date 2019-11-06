import React, { Component, Fragment } from "react";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import CartItems from "./Components/CartItems";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      currentUser: ""
    };
  }

  componentDidMount() {
    localStorage.getItem("jwt")
      ? this.setState({
          isLoggedIn: true
        })
      : this.setState({ isLoggedIn: false });
  }

  loggedIn = isLoggedIn => {
    this.setState({ isLoggedIn: isLoggedIn });
  };

  handleLogoutClick = event => {
    event.preventDefault();
    localStorage.removeItem("jwt");
    this.setState({ isLoggedIn: false });
  };

  render() {
    console.log("App Current State: ", this.state);
    return (
      <Router>
        <Fragment>
          {/* display Nav Bar always */}
          <NavBar
            isLoggedIn={this.state.isLoggedIn}
            handleLogoutClick={event => this.handleLogoutClick(event)}
          />
          {/* #Switch routes */}
          <Switch>
            #Home page (conditional render based of if jwt exists)
            {localStorage.getItem("jwt") ? (
              <Route
                exact
                path="/"
                render={routerProps => {
                  return <Home {...routerProps} />;
                }}
              />
            ) : (
              <Redirect exact from="/" to="/login" />
            )}
            #About page
            <Route
              exact
              path="/about"
              render={routerProps => {
                return <About {...routerProps} />;
              }}
            />
            #Products page
            <Route
              exact
              path="/products"
              render={routerProps => {
                return <Products {...routerProps} />;
              }}
            />
            #Carts page
            <Route
              exact
              path="/cart"
              render={routerProps => {
                return <CartItems {...routerProps} />;
              }}
            />
            #Register page
            <Route
              exact
              path="/register"
              render={routerProps => {
                return <Register {...routerProps} />;
              }}
            />
            #Login page
            <Route
              exact
              path="/login"
              render={routerProps => {
                return (
                  <Login
                    {...routerProps}
                    loggedIn={this.loggedIn}
                    currentUser={this.currentUser}
                  />
                );
              }}
            />
          </Switch>
          {/* #Display footer segment always */}
          {/* <Footer /> */}
        </Fragment>
      </Router>
    );
  }
}

export default App;
