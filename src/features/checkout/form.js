import React from "react";

import { Field, reduxForm } from "redux-form";

import { Container, Form, Button } from "semantic-ui-react";

import Select from "../../modules/select";

function CheckoutForm(props) {
  const { handleSubmit } = props;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Add Delivery Address:</h2>

        <Form.Field required>
          <label htmlFor="order[street]">Street:</label>
          <Field name="order[street]" component="input" type="text" />
        </Form.Field>

        <Form.Field required>
          <label htmlFor="order[city]">City:</label>
          <Field name="order[city]" component="input" type="text" />
        </Form.Field>

        <Form.Field required>
          <label htmlFor="order[state]">State:</label>
          <Field name="order[state]" component="input" type="text" />
        </Form.Field>

        <Form.Field required>
          <label htmlFor="order[zipcode]">Zip Code:</label>
          <Field name="order[zipcode]" component="input" type="number" />
        </Form.Field>

        <Form.Field required>
          <label htmlFor="order[deliverytime]">Delivery Time:</label>
          <Field
            name="order[deliverytime]"
            component={Select}
            options={{
              "9:00am - 10:00am": "9:00am - 10:00am",
              "10:00am - 11:00am": "10:00am - 11:00am",
              "11:00am - 12:00pm": "11:00am - 12:00pm",
              "12:00pm - 1:00pm": "12:00pm - 1:00pm",
              "1:00pm - 2:00pm": "1:00pm - 2:00pm",
              "2:00pm - 3:00pm": "2:00pm - 3:00pm",
              "3:00pm - 4:00pm": "3:00pm - 4:00pm",
              "4:00pm - 5:00pm": "4:00pm - 5:00pm",
              "5:00pm - 6:00pm": "5:00pm - 6:00pm",
              "6:00pm - 7:00pm": "6:00pm - 7:00pm",
              "7:00pm - 8:00pm": "7:00pm - 8:00pm",
              "8:00pm - 9:00pm": "8:00pm - 9:00pm"
            }}
          ></Field>
        </Form.Field>

        <Button color="green" type="submit">
          Place Order
        </Button>
      </Form>
    </Container>
  );
}

CheckoutForm = reduxForm({
  form: "checkout"
})(CheckoutForm);

export default CheckoutForm;
