import React, { Component } from "react";
import { Container } from "semantic-ui-react";

class RetailerSelection extends Component {
  render() {
    return (
      <Container>
        Where would you like to shop?
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
      </Container>
    );
  }
}

export default RetailerSelection;
