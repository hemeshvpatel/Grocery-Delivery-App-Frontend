import React from "react";
import { connect } from "react-redux";

import Cart from "../cart";
import CheckoutForm from "./form";
import fetchApi from "../../modules/fetch-api";

import { Container, Grid } from "semantic-ui-react";

function submitOrder(values, cart) {
  const { email, name } = values.order;

  fetchApi("post", "http://localhost:3000/api/v1/orders", {
    order: {
      name,
      email,
      order_items_attributes: cart.map(item => ({
        product_id: item.id,
        quantity: item.quantity
      }))
    }
  }).then(json => {
    console.log("JSON response from fetch post api orders", json);
    if (json.errors) {
      alert("something went wrong!");
      return;
    }
    localStorage.removeItem("state");
    document.location.href = `/orders/${json.id}`;
  });
}

function Checkout(props) {
  const { cart } = props;
  return (
    <Container>
      <Grid>
        <Grid.Column width={4}>
          <CheckoutForm onSubmit={values => submitOrder(values, cart)} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Cart />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(Checkout);
