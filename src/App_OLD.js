import React, { Component, Fragment } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import store from "./store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

const store = store();

class App extends Component {
  constructor() {
    super();

    this.state = {
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

  currentUser = event => {
    this.setState({ currentUser: event.currentUser });
  };

  render() {
    console.log("App Current State: ", this.state);
    return (
      <Provider store={store}>
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
                  path="/home"
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
                  return <Cart {...routerProps} />;
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
                    <Login {...routerProps} currentUser={this.currentUser} />
                  );
                }}
              />
            </Switch>
            {/* #Display footer segment always */}
            {/* <Footer /> */}
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default withRouter(App);
