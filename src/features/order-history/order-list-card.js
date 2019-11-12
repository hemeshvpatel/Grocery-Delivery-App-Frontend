import React from "react";

import { Card } from "semantic-ui-react";

function OrderListCard(props) {
  //console.log("Order List Item return: ", props);
  //const date = new Date(props.order.created_at);
  //console.log(date);
  return (
    <Card key={props.order.id} color="green">
      <Card.Content textAlign="center">
        <Card.Header>Order# {props.order.id}</Card.Header>
        <Card.Meta>
          Ordered on {props.order.created_at.substring(0, 10)}
        </Card.Meta>
        <Card.Description>
          Order Total: ${props.order.order_total}{" "}
        </Card.Description>
        <br></br>
        <Card.Description>
          <u>Items Ordered:</u>
          {props.order.order_items.map(item => (
            <li key={item.id}>
              {item.quantity}x {item.product.name}
            </li>
          ))}
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default OrderListCard;
