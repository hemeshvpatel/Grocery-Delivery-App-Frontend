import React, { Component } from "react";
import { Container, Menu, Button, Icon, Flag } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  handleLogoutClick = event => {
    event.preventDefault();
    localStorage.removeItem("jwt");
    this.setState({
      isLoggedIn: false
    });
    this.context.history.push("/");
  };

  render() {
    return (
      <Container>
        <Menu>
          <Menu.Item>
            <img src={"./shoppingcart.png"} alt="header" />
          </Menu.Item>
          <Menu.Item>
            <Flag name="us" />
          </Menu.Item>

          <Menu.Item as={NavLink} to="/about" name="home" position="right">
            <Button animated color="orange">
              <Button.Content visible>About Us</Button.Content>
              <Button.Content hidden>
                <Icon name="users" />
              </Button.Content>
            </Button>
          </Menu.Item>
          {localStorage.getItem("jwt") ? (
            <Menu.Item>
              <Button
                animated="vertical"
                position="right"
                color="orange"
                onClick={event => this.handleLogoutClick(event)}
              >
                <Button.Content visible>Log out</Button.Content>
                <Button.Content hidden>
                  <Icon name="log out" />
                </Button.Content>
              </Button>
            </Menu.Item>
          ) : (
            <Menu.Item as={NavLink} to="/login" name="home">
              <Button animated="vertical" position="right" color="orange">
                <Button.Content visible>Log in</Button.Content>
                <Button.Content hidden>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </Menu.Item>
          )}
        </Menu>
      </Container>
    );
  }
}

export default NavBar;
