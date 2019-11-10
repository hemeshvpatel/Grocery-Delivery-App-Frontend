import React from "react";
import Cart from "../features/cart";

import { Container } from "semantic-ui-react";

export default function CartPage(props) {
  return (
    <Container>
      <div>
        <h2>My Cart</h2>
        <Cart />
      </div>
    </Container>
  );
}
