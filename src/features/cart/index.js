import React from "react";
import { connect } from "react-redux";

import {
  Container,
  Table,
  Image,
  Icon,
  Button,
  Segment
} from "semantic-ui-react";

function sort(items) {
  return items.sort((a, b) => a.id - b.id);
}

function cartTotal(props) {
  let sum = 0;
  props.cart.forEach(item => {
    const itemTotal = item.quantity * item.price;
    return (sum += itemTotal);
  });
  return sum.toFixed(2);
}

function Cart(props) {
  //console.log("Cart Props: ", props.cart);
  return (
    <Container>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Item Image</Table.HeaderCell>
            <Table.HeaderCell>Item Name</Table.HeaderCell>
            {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Quantity</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Add</Table.HeaderCell>
            <Table.HeaderCell>Remove</Table.HeaderCell>
            <Table.HeaderCell>Remove All</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sort(props.cart).map(item => {
            const total = item.quantity * item.price;
            return (
              <Table.Row key={item.id}>
                <Table.Cell>
                  <Image src={item.image_url} size="tiny" />
                </Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                {/* <Table.Cell>{item.id}</Table.Cell> */}
                <Table.Cell>${item.price}</Table.Cell>
                <Table.Cell>x {item.quantity}</Table.Cell>
                <Table.Cell>${parseFloat(total).toFixed(2)}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => props.addToCart(item)}>
                    <Icon name="add" color="green" />
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => props.removeFromCart(item)}>
                    <Icon name="minus" color="red" />
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => props.removeAllFromCart(item)}>
                    <Icon name="remove" /> Remove All
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <Segment>
        <h2>Shopping Cart Total: ${cartTotal(props)}</h2>
      </Segment>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    },
    removeAllFromCart: item => {
      dispatch({ type: "REMOVE_ALL", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
