import React, { Component } from "react";
import { Container, Menu, Button, Icon, Flag } from "semantic-ui-react";
import { connect } from "react-redux";

import { Link, withRouter } from "react-router-dom";

class Navigation extends Component {
  handleLogInButton = event => {
    this.props.history.push("/login");
  };

  handleLogOutButton = event => {
    localStorage.clear();
    localStorage.removeItem("state");
    this.props.history.push("/login");
  };

  render() {
    return (
      <Container>
        <Menu>
          <Menu.Item>
            <Flag name="us" />
          </Menu.Item>
          <Menu.Item>
            <Link to="/">
              <Button color="orange">Home</Button>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="./cart">
              <Button animated="vertical" position="right" color="orange">
                <Button.Content visible>
                  My Cart (
                  {this.props.cart.reduce((acc, item) => {
                    return acc + item.quantity;
                  }, 0)}
                  )
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="shop" />
                </Button.Content>
              </Button>
            </Link>
          </Menu.Item>

          {localStorage.getItem("jwt") ? (
            <Menu.Item>
              <Link to="/orderhistory">
                <Button color="orange">Order History</Button>
              </Link>
            </Menu.Item>
          ) : null}

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

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default withRouter(connect(mapStateToProps)(Navigation));
