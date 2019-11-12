import React, { Component } from "react";
import { Container, Header, Segment, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions/cartActions";

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    const checkoutTotalFloat = cartItems.reduce(
      (accum, current) => accum + current.price * current.count,
      0
    );
    const checkoutTotal = parseFloat(checkoutTotalFloat).toFixed(2);
    return (
      <Container textAlign="left">
        <Segment.Group>
          <Segment>
            {cartItems.length === 0 ? (
              <Header as="h2" content="Shopping Cart is Empty" />
            ) : cartItems.length === 1 ? (
              <Header
                as="h2"
                content={cartItems.length + " item in your cart"}
              />
            ) : (
              <Header
                as="h2"
                content={cartItems.length + " items in your cart"}
              />
            )}
          </Segment>
          {cartItems.length > 0 && (
            <Segment.Group>
              {cartItems.map(item => (
                <Segment>
                  {item.name} x {item.count} = ${item.price * item.count}
                  <Icon
                    color="red"
                    name="remove circle"
                    onClick={e => this.props.removeFromCart(e, item)}
                  />
                </Segment>
              ))}
            </Segment.Group>
          )}
          <Segment>
            Total: ${checkoutTotal} <Button>Proceed to checkout</Button>
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => ({ cartItems: state.cart.items });

export default connect(
  mapStateToProps,
  { removeFromCart }
)(Cart);
