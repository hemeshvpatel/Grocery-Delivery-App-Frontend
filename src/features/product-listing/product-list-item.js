import React from "react";

import { Image, Card, Icon, Button } from "semantic-ui-react";

export default function ProductListItem(props) {
  // console.log("product-list-item", props);
  return (
    <Card key={props.product.id} color="green">
      <Image
        src={props.product.image_url}
        size="tiny"
        verticalAlign="middle"
        wrapped
        ui={false}
      />
      <Card.Content textAlign="center">
        <Card.Header>{props.product.name}</Card.Header>
        <Card.Meta>ID: {props.product.id}</Card.Meta>
        <Card.Description>{props.product.description}</Card.Description>
      </Card.Content>

      <Card.Content extra textAlign="center">
        {" "}
        <Card.Description>
          ${props.product.price} per {props.product.size}
        </Card.Description>
      </Card.Content>

      <Card.Content extra textAlign="center">
        <Button color="green" onClick={e => this.handleAddToCart(e, props)}>
          <Icon name="add to cart" /> Add to Cart
        </Button>
      </Card.Content>
    </Card>
  );
}
