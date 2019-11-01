import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import Register from "./Components/Register";
import RetailerSelection from "./Components/RetailerSelection";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  loggedIn = isLoggedIn => {
    this.setState({ isLoggedIn: isLoggedIn });
  };

  componentDidMount() {
    localStorage.getItem("jwt")
      ? this.setState({
          isLoggedIn: true
        })
      : this.setState({ isLoggedIn: false });
  }

  render() {
    console.log("App Current State: ", this.state);
    return (
      <Router>
        <div>
          <NavBar isLoggedIn={this.state.isLoggedIn} />
          <Route exact path="/about" component={About} />
          <Switch>
            {localStorage.getItem("jwt") ? (
              <Route exact path="/" component={Home} />
            ) : (
              <Redirect from="/" to="/login" />
            )}
          </Switch>
          <Route
            exact
            path="/login"
            render={routeProps => (
              <Login {...routeProps} loggedIn={this.loggedIn} />
            )}
          />
          <Route
            exact
            path="/register"
            render={routeProps => <Register {...routeProps} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
