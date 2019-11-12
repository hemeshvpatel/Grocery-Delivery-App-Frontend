import React from "react";

import Profile from "../features/order-history";

import { Container, Header } from "semantic-ui-react";

export default function Homepage(props) {
  return (
    <Container>
      <br></br>
      <Header textAlign="center">Past Order History</Header>
      <br></br>
      <Profile />
    </Container>
  );
}
