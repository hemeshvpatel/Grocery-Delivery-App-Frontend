import React from "react";
import Order from "../features/order";

import { Container, Header, Icon } from "semantic-ui-react";

export default function OrdersPage(props) {
  return (
    <Container>
      <br />
      <Header as="h2" textAlign="center">
        Order # {props.match.params.id}
        <Header.Subheader>Order Details</Header.Subheader>
      </Header>
      <br />
      <Order id={props.match.params.id} />
    </Container>
  );
}
