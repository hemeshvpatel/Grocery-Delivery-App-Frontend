import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      user: "",
      isLoggedIn: false
    };
  }

  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = event => {
    event.preventDefault();
    console.log("login form is being submitted");
    fetch("https://grocery-delivery-backend.herokuapp.com/api/v1/login", {
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
      .then(resp => resp.json())
      .then(response => {
        //console.log("Login Response from fetch: ", response);
        this.setState({ user: response.user });
        //store jwt token in local storage
        localStorage.setItem("jwt", response.jwt);
        return response;
      })
      .then(response => {
        localStorage.getItem("jwt")
          ? this.setState({
              isLoggedIn: true
            })
          : this.setState({ isLoggedIn: false });
        this.props.history.push("/");
      });
  };

  handleClickHeretoRegister() {
    this.props.history.push("/register");
  }

  render() {
    //console.log("Current Login State = ", this.state);
    return (
      <Grid verticalAlign="middle" columns={2} centered>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Log in to start shopping!
          </Header>
          <Segment>
            <Form size="large" onSubmit={event => this.handleLogin(event)}>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
                name="username"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                onChange={this.handleChange}
              />
              <Button
                color="green"
                fluid
                size="large"
                // onClick={() => console.log("Clicked")}
              >
                Login
              </Button>
            </Form>
          </Segment>
          <Message align="center">
            Not registered yet? No worries!{" "}
            <Button onClick={this.handleClickHeretoRegister}>
              Click to Register
            </Button>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
