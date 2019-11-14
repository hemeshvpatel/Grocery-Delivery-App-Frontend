import React from "react";

import AddBtn from "./add-btn";
import RmvBtn from "./rmv-btn";

import { Image, Card } from "semantic-ui-react";

export default function ProductListItem(props) {
  // console.log("product-list-item", props);

  return (
    <Card key={props.product.id} color="green">
      <Image src={props.product.image_url} size="small" centered />
      <Card.Content textAlign="center">
        <Card.Header>{props.product.name}</Card.Header>
        <Card.Meta>{props.product.category}</Card.Meta>
        <Card.Description>{props.product.description}</Card.Description>
        {/* <Card.Description>{props.product.id}</Card.Description> */}
      </Card.Content>

      <Card.Content extra textAlign="center">
        {" "}
        <Card.Description>
          ${parseFloat(props.product.price).toFixed(2)} per {props.product.size}
        </Card.Description>
      </Card.Content>

      <Card.Content extra textAlign="center">
        <AddBtn
          cartItem={props.cartItem}
          product={props.product}
          addToCart={props.addToCart}
        />
        {props.cartItem ? (
          <RmvBtn
            cartItem={props.cartItem}
            product={props.product}
            removeFromCart={props.removeFromCart}
          />
        ) : null}
      </Card.Content>
    </Card>
  );
}
