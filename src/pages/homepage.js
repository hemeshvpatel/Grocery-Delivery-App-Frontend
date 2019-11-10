import React from "react";

import ProductListing from "../features/product-listing";

import { Container } from "semantic-ui-react";

export default function Homepage(props) {
  return (
    <Container>
      <div>
        <h2>Home Page</h2>
        <ProductListing />
      </div>
    </Container>
  );
}
