import React from "react";

import ProductListing from "../features/product-listing";

import { Container, Header, Icon } from "semantic-ui-react";

export default function Homepage(props) {
  return (
    <Container>
      <br></br>
      <Header textAlign="center">
        Start Shopping - Free Same Day Delivery for orders placed before 2:00pm!{" "}
        <Icon name="shipping fast" />
      </Header>
      <br></br>
      <ProductListing />
    </Container>
  );
}
