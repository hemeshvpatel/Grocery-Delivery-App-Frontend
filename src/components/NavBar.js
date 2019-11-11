import React, { Component } from "react";
import {
  Container,
  Responsive,
  Menu,
  Button,
  Icon,
  Flag
} from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";

class NavBar extends Component {
  handleLogInButton = event => {
    this.props.history.push("/login");
  };

  handleMyCartButton = event => {
    this.props.history.push("/cart");
  };

  handleCartHomeButton = event => {
    this.props.history.push("/products");
  };

  render() {
    //console.log("NavBar props", this.props);
    return (
      <Container>
        <Menu>
          <Menu.Item onClick={this.handleCartHomeButton}>
            <img src={"./shoppingcart.png"} alt="header" />
          </Menu.Item>
          <Menu.Item>
            <Flag name="us" />
          </Menu.Item>

          {/* <Menu.Item as={NavLink} to="/about" name="home" position="left">
            <Button animated color="orange">
              <Button.Content visible>About Us</Button.Content>
              <Button.Content hidden>
                <Icon name="users" />
              </Button.Content>
            </Button>
          </Menu.Item> */}

          {/* <Menu.Menu position="left">
            <Menu.Item>
              <Responsive
                {...Responsive.onlyMobile}
                as={Button}
                content="Switch to desktop version"
                icon="desktop"
                labelPosition="left"
              />
              <Responsive
                as={Button}
                content="Switch to mobile version"
                icon="mobile"
                labelPosition="left"
                minWidth={Responsive.onlyTablet.minWidth}
              />
            </Menu.Item>
          </Menu.Menu> */}

          {localStorage.getItem("jwt") ? (
            <Menu.Item position="right">
              <Button animated color="orange" onClick={this.handleMyCartButton}>
                <Button.Content visible>My Cart</Button.Content>
                <Button.Content hidden>
                  <Icon name="shopping cart" />
                </Button.Content>
              </Button>
            </Menu.Item>
          ) : null}
          {localStorage.getItem("jwt") ? (
            <Menu.Item>
              <Button
                animated="vertical"
                position="right"
                color="orange"
                onClick={this.props.handleLogoutClick}
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

export default withRouter(NavBar);
