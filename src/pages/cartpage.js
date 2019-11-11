import React from "react";
import Cart from "../features/cart";

import { Container, Header, Icon } from "semantic-ui-react";

export default function CartPage(props) {
  return (
    <Container>
      <br />
      <Header as="h2" icon textAlign="center">
        <Icon name="cart" />
        My Cart
        <Header.Subheader>
          View your shopping cart and add/remove items
        </Header.Subheader>
      </Header>
      <br />
      <Cart />
    </Container>
  );
}
