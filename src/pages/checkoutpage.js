import React from "react";
import Checkout from "../features/checkout";
import { withRouter } from "react-router-dom";

import { Container, Header, Icon } from "semantic-ui-react";

function CheckoutPage(props) {
  return (
    <Container>
      <br />
      <Header as="h2" icon textAlign="center">
        <Icon name="list" />
        Checkout
        <Header.Subheader>
          Review your shopping cart and submit your order for delivery
        </Header.Subheader>
      </Header>
      <br />
      <Checkout />
    </Container>
  );
}

export default withRouter(CheckoutPage);
