import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Register from "./Components/Register";
import RetailerSelection from "./Components/RetailerSelection";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <Login />
          <Register />
          <RetailerSelection />
        </Container>
      </Fragment>
    );
  }
}

export default App;