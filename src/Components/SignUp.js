import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class SignUp extends Component {
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Sign Up
          </Header>
          <Segment>
            <Form size="large">
              <Form.Input
                fluid
                icon="address book"
                iconPosition="left"
                placeholder="First Name"
              />
              <Form.Input
                fluid
                icon="address book"
                iconPosition="left"
                placeholder="Last Name"
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <Form.Input
                fluid
                icon="envelope"
                iconPosition="left"
                placeholder="Email"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Form.Input
                fluid
                // icon="address book"
                iconPosition="left"
                placeholder="Street"
              />
              <Form.Input
                fluid
                //icon="address book"
                iconPosition="left"
                placeholder="City"
              />
              <Form.Input
                fluid
                //icon="user"
                iconPosition="left"
                placeholder="State"
                control="select"
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
                //icon="lock"
                iconPosition="left"
                placeholder="ZipCode"
                type="number"
              />
              <Button
                color="green"
                fluid
                size="large"
                onClick={() => console.log("Clicked")}
              >
                Next
              </Button>
            </Form>
          </Segment>
          <Message>
            Already signed up? <a href="#">Login</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SignUp;
