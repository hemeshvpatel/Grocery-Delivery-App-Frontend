import React from "react";
import Order from "../features/order";

import { Container, Header } from "semantic-ui-react";

export default function OrdersPage(props) {
  return (
    <Container>
      <br />
      <Header as="h2" textAlign="center">
        <h1>Order # {props.match.params.id}</h1>
        <Header.Subheader>Order Details</Header.Subheader>
      </Header>
      <br />
      <Order id={props.match.params.id} />
    </Container>
  );
}
