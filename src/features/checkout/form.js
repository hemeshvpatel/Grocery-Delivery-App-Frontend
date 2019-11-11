import React from "react";

import { Field, reduxForm } from "redux-form";

import { Container, Grid, Card, Dimmer, Loader } from "semantic-ui-react";

function CheckoutForm(props) {
  const { handleSubmit } = props;
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="order[name]">Name:</label>
          <br />
          <Field name="order[name]" component="input" type="text" />
        </div>

        <div>
          <label htmlFor="order[email]">Email:</label>
          <br />
          <Field name="order[email]" component="input" type="email" />
        </div>

        <div>
          <button type="submit">Submit order</button>
        </div>
      </form>
    </Container>
  );
}

CheckoutForm = reduxForm({
  form: "checkout"
})(CheckoutForm);

export default CheckoutForm;
