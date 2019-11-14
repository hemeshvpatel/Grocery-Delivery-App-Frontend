import React from "react";
import { Link, withRouter } from "react-router-dom";

import { Card, List, Image, Button } from "semantic-ui-react";

function OrderListCard(props) {
  const orderLink = `/orders/${props.order.id}`;
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
      <Card.Content extra textAlign="center">
        <Link to={orderLink}>
          <Button color="green">View Full Order Details</Button>
        </Link>
      </Card.Content>
    </Card>
  );
}

export default withRouter(OrderListCard);
