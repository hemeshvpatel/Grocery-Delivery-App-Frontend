import React from "react";
import { connect } from "react-redux";

import { Container, Grid, Card, Dimmer, Loader } from "semantic-ui-react";

function Checkout(props) {
  return <Container>Checkout stuff</Container>;
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
