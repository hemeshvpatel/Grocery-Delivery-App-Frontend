import React, { Component } from "react";
import { Container, Menu, Button, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <Container>
        <Menu>
          <Menu.Item>
            <img src={"./shoppingcart.png"} alt="header" />
          </Menu.Item>
          <Menu.Item as={NavLink} to="/about" name="home" position="left">
            <Button animated color="orange">
              <Button.Content visible>About Us</Button.Content>
              <Button.Content hidden>
                <Icon name="users" />
              </Button.Content>
            </Button>
          </Menu.Item>
          <Menu.Item as={NavLink} to="/register" name="home">
            <Button animated="fade" position="right" color="orange">
              <Button.Content visible>Register</Button.Content>
              <Button.Content hidden>$0.00/month</Button.Content>
            </Button>
          </Menu.Item>
          <Menu.Item as={NavLink} to="/login" name="home">
            <Button animated="vertical" position="right" color="orange">
              <Button.Content visible>Log in</Button.Content>
              <Button.Content hidden>
                <Icon name="shop" />
              </Button.Content>
            </Button>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default NavBar;
