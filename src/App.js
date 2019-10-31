import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

class App extends Component {
  render() {
    return (
      <Container>
        <Login />
        <SignUp />
      </Container>
    );
  }
}

export default App;
