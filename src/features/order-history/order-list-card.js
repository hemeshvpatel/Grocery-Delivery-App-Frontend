import React from "react";

import { Card, List, Image } from "semantic-ui-react";

function OrderListCard(props) {
  console.log("Order List Item return: ", props);
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
          Total: ${parseFloat(props.order.order_total).toFixed(2)}{" "}
        </Card.Description>
        <br></br>

        <Card.Description>
          <u>Items Ordered</u>
          <List>
            {props.order.order_items.map(item => (
              <List.Item key={item.id}>
                <Image avatar src={item.product.image_url} />
                <List.Content>{item.product.name}</List.Content>
              </List.Item>
            ))}
          </List>
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

export default OrderListCard;
