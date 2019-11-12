import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Divider
} from "semantic-ui-react";
import { withRouter, Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  //Collect info as it is typed and update state
  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    this.fetchLogin();
  };

  fetchLogin() {
    fetch("https://grocery-delivery-backend.herokuapp.com/api/v1/login", {
      // fetch(
      //   "https://cors-anywhere.herokuapp.com/https://grocery-delivery-backend.herokuapp.com/api/v1/login",
      //   {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.user);
        //store jwt token in local storage
        if (response.jwt === undefined) {
          alert("Invalid username or password");
        } else {
          localStorage.setItem("jwt", response.jwt);
          localStorage.setItem("user", JSON.stringify(response.user));
          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.error("Error: ", err);
      });
  }

  handleRegisterClick() {
    this.props.history.push("/register");
  }

  render() {
    // console.log("Current Login State = ", this.state);

    return !localStorage.getItem("jwt") ? (
      <Grid verticalAlign="middle" columns={2} color="grey" centered>
        <Grid.Column>
          <br></br>
          <Header as="h2" textAlign="center">
            Log in or Register to start shopping!
          </Header>
          <Segment placeholder>
            <Grid stackable columns={2} relaxed="very">
              <Grid.Column>
                <Form size="large" onSubmit={this.handleLogin}>
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    label="Username"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    label="Password"
                    placeholder="Password"
                    name="password"
                    type="password"
                    onChange={this.handleChange}
                  />

                  <Button color="green" content="Login" />
                </Form>
              </Grid.Column>

              <Grid.Column verticalAlign="middle">
                <Button
                  color="orange"
                  content="Register"
                  icon="signup"
                  size="big"
                  onClick={event => this.handleRegisterClick(event)}
                />
              </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
          </Segment>
          {/* <Message align="center">
            Not registered yet? No worries!{" "}
            <Button onClick={this.handleClickHeretoRegister}>
              Click to Register
            </Button>
          </Message> */}
        </Grid.Column>
      </Grid>
    ) : (
      <Redirect to="/" />
    );
  }
}

export default withRouter(Login);
