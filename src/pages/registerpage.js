import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      email: ""
    };
  }

  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSignUpUserProfile = event => {
    event.preventDefault();
    this.fetchRegister();
    this.props.history.push("/");
  };

  fetchRegister() {
    fetch("https://grocery-delivery-backend.herokuapp.com/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        }
      })
    })
      .then(resp => resp.json())
      .then(response => {
        console.log("Sign Up Response from fetch: ", response);
        if (response.error === "failed to create user") {
          alert("This user already exists");
        } else {
          this.setState({ user: response.user });
          //store jwt token in local storage
          localStorage.setItem("jwt", response.jwt);
          localStorage.setItem("user", JSON.stringify(response.user));
        }
      });
  }

  render() {
    console.log("Current SignUp State: ", this.state);

    return (
      <Grid verticalAlign="middle" centered columns={2}>
        <Grid.Column>
          <br></br>
          <Header as="h2" textAlign="center">
            Register to start shopping!
          </Header>
          <Segment>
            <Form
              size="large"
              onSubmit={event => this.handleSignUpUserProfile(event)}
            >
              <Form.Input
                fluid
                icon="address book"
                iconPosition="left"
                placeholder="First Name"
                name="first_name"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="address book"
                iconPosition="left"
                placeholder="Last Name"
                name="last_name"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Email"
                name="email"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="envelope"
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
                onClick={() => console.log("Clicked")}
              >
                Sign Up
              </Button>
            </Form>
          </Segment>
          <Message align="center">
            Already registered? <a href="/login">Login here</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
