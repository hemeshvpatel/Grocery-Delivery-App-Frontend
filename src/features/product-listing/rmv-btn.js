import React from "react";

import { Image, Card, Icon, Button } from "semantic-ui-react";

export default function RmvButton(props) {
  return (
    <Button color="red" onClick={() => props.removeFromCart(props.cartItem)}>
      <Icon name="remove" /> Remove
    </Button>
  );
}
