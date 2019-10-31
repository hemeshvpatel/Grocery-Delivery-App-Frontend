import React, { Component } from "react";
import { Container, Image, Menu } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    return (
      <Menu>
        <Container>
          <Menu.Item as="a" header>
            <Image height="25px" width="25px" src="shoppingcart.png" />
            Groceries Delivered!
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as="a" name="login">
              Login
            </Menu.Item>
            <Menu.Item as="a" name="register">
              Register
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
