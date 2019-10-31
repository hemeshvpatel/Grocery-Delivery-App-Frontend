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
  render() {
    return (
      <Router>
        <div>
          <NavBar />
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
            render={routeProps => <Login {...routeProps} />}
          />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
