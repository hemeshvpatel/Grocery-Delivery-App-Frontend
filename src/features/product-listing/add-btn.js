import React from "react";

import { Image, Card, Icon, Button } from "semantic-ui-react";

export default function AddButton(props) {
  return (
    <Button color="green" onClick={() => props.addToCart(props.product)}>
      <Icon name="add to cart" /> Add to Cart (
      {(props.cartItem && props.cartItem.quantity) || 0})
    </Button>
  );
}
