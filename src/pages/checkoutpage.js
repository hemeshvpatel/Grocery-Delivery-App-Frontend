import React from "react";
import Checkout from "../features/checkout";

import { Container } from "semantic-ui-react";

export default function CheckoutPage(props) {
  return (
    <Container>
      <div>
        <h2>Checkout</h2>
        <Checkout />
      </div>
    </Container>
  );
}
