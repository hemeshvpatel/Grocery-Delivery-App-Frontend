import React from "react";
import Cart from "../features/cart";

import { Container, Header, Icon, Message } from "semantic-ui-react";

class CartPage extends React.Component {
  state = { visible: true };

  componentDidMount() {
    localStorage.getItem("jwt")
      ? this.setState({
          visible: false
        })
      : this.setState({ visible: true });
  }

  handleDismiss = () => {
    this.setState({ visible: false });

    // setTimeout(() => {
    //   this.setState({ visible: true });
    // }, 2000);
  };

  render() {
    if (this.state.visible) {
      return (
        <Message
          onDismiss={this.handleDismiss}
          header="Welcome to your shopping cart!"
          content="Please log in or register to proceed to checkout"
        />
      );
    }

    return (
      <Container>
        <br />

        <Header as="h2" icon textAlign="center">
          <Icon name="cart" />
          My Cart
          <Header.Subheader>
            View your shopping cart and add/remove items
          </Header.Subheader>
        </Header>
        <br />
        <Cart />
      </Container>
    );
  }
}

export default CartPage;
