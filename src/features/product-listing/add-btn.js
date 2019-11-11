import React from "react";

import { Icon, Button } from "semantic-ui-react";

export default function AddButton(props) {
  return (
    <Button
      size="tiny"
      color="green"
      onClick={() => props.addToCart(props.product)}
    >
      <Icon name="add to cart" /> Add to Cart (
      {(props.cartItem && props.cartItem.quantity) || 0})
    </Button>
  );
}
