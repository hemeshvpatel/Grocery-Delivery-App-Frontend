import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    localStorage.getItem("jwt")
      ? this.setState({ isLogged: true })
      : this.setState({ isLogged: false });
  }

  render() {
    return (
      <Container textAlign="center">
        <div>
          <h1>Where would you like to shop?</h1>
          <div class="ui grid">
            <div class="sixteen wide mobile eight wide tablet four wide computer column">
              <p>Retailer 1</p>
            </div>
            <div class="sixteen wide mobile eight wide tablet four wide computer column">
              <p>Retailer 2</p>
            </div>
            <div class="sixteen wide mobile eight wide tablet four wide computer column">
              <p>Retailer 3</p>
            </div>
            <div class="sixteen wide mobile eight wide tablet four wide computer column">
              <p>Retailer 4</p>
            </div>
            <div class="sixteen wide mobile eight wide tablet four wide computer column">
              <p>Retailer 5</p>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
