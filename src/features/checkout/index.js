import React from "react";
import { connect } from "react-redux";

import Cart from "../cart";
import CheckoutForm from "./form";
import fetchApi from "../../modules/fetch-api";

import { Container, Grid } from "semantic-ui-react";

function submitOrder(values, cart) {
  const { street, city, state, zipcode, deliverytime } = values.order;

  const user = JSON.parse(localStorage.getItem("user"));
  let name = user.first_name + " " + user.last_name;
  let email = user.email;
  let user_id = user.id;
  let order_total = localStorage.getItem("cartTotal");
  console.log("Order Total: ", order_total);

  fetchApi(
    "post",
    "https://grocery-delivery-backend.herokuapp.com/api/v1/orders",
    // "http://localhost:3000/api/v1/orders",
    {
      order: {
        name,
        email,
        street,
        city,
        state,
        zipcode,
        deliverytime,
        user_id,
        order_total,
        order_items_attributes: cart.map(item => ({
          product_id: item.id,
          quantity: item.quantity
        }))
      }
    }
  ).then(json => {
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
