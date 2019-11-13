import React from "react";

import OrderHistory from "../features/order-history";

import { Container, Header, Icon } from "semantic-ui-react";

export default function Homepage(props) {
  return (
    <Container>
      <br />
      <Header as="h2" icon textAlign="center">
        <Icon name="history" />
        Order History
        <Header.Subheader>View all past delivery orders</Header.Subheader>
      </Header>
      <br />
      <OrderHistory />
    </Container>
  );
}
