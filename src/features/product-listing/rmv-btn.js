import React from "react";

import { Icon, Button } from "semantic-ui-react";

export default function RmvButton(props) {
  return (
    <Button
      size="tiny"
      color="red"
      icon
      textAlign="center"
      onClick={() => props.removeFromCart(props.cartItem)}
    >
      <Icon name="remove" />
    </Button>
  );
}
