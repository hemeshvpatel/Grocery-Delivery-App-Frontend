import React, { Component } from "react";
import { Container, Menu, Button, Icon, Flag } from "semantic-ui-react";

import { Link, withRouter } from "react-router-dom";

class Navigation extends Component {
  handleLogInButton = event => {
    this.props.history.push("/login");
  };

  handleLogOutButton = event => {
    localStorage.removeItem("jwt");
    this.props.history.push("/");
  };

  render() {
    return (
      <Container>
        <Menu>
          <Menu.Item>
            <Link to="/">
              <Button color="orange">Home</Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="./cart">
              <Button animated="vertical" position="right" color="orange">
                <Button.Content visible>My Cart</Button.Content>
                <Button.Content hidden>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Flag name="us" />
          </Menu.Item>

          {/* {localStorage.getItem("jwt") ? (
            <Menu.Item position="right">
              <Link to="/cart">
                <Button
                  animated
                  color="orange"
                  onClick={this.handleMyCartButton}
                >
                  <Button.Content visible>My Cart</Button.Content>
                  <Button.Content hidden>
                    <Icon name="shopping cart" />
                  </Button.Content>
                </Button>
              </Link>
            </Menu.Item>
          ) : null} */}
          {localStorage.getItem("jwt") ? (
            <Menu.Item position="right">
              <Button
                animated="vertical"
                position="right"
                color="orange"
                onClick={this.handleLogOutButton}
              >
                <Button.Content visible>Log out</Button.Content>
                <Button.Content hidden>
                  <Icon name="log out" />
                </Button.Content>
              </Button>
            </Menu.Item>
          ) : (
            <Menu.Item position="right">
              <Button
                animated="vertical"
                position="right"
                color="orange"
                onClick={this.handleLogInButton}
              >
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

export default withRouter(Navigation);
