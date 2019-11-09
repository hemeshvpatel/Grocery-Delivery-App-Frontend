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
      email: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      user: ""
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
    //console.log("sign up form is being submitted");
    fetch("https://grocery-delivery-backend.herokuapp.com/api/v1/users", {
      // fetch("http://localhost:3000/api/v1/users", {
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
        }
      });
  };

  render() {
    console.log("Current SignUp State: ", this.state);

    return (
      <Grid verticalAlign="middle" centered columns={2}>
        <Grid.Column>
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
              <Form.Input
                fluid
                icon="home"
                iconPosition="left"
                placeholder="Street"
                name="street"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="home"
                iconPosition="left"
                placeholder="City"
                name="city"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="home"
                iconPosition="left"
                placeholder="State"
                control="select"
                name="state"
                onChange={this.handleChange}
              >
                <option value="">State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </Form.Input>
              <Form.Input
                fluid
                icon="home"
                iconPosition="left"
                placeholder="ZipCode"
                type="number"
                name="zipcode"
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
