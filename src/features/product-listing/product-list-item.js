import React from "react";

import { Image, Card, Icon, Button } from "semantic-ui-react";

export default function ProductListItem(props) {
  console.log("product-list-item", props);
  return (
    <Card key={props.product.id} color="green">
      <Image
        src={props.product.image_url}
        size="tiny"
        verticalAlign="middle"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{props.product.name}</Card.Header>
        <Card.Header>ID: {props.product.id}</Card.Header>
        <Card.Meta>
          <span>{props.product.description}</span>
        </Card.Meta>
        ${props.product.price} per {props.product.size}
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Button color="green" onClick={e => this.handleAddToCart(e, props)}>
          <Icon name="add to cart" /> Add to Cart
        </Button>
      </Card.Content>
    </Card>
  );
}
