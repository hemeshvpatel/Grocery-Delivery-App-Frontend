import React from "react";

import fetchApi from "../../modules/fetch-api";

import {
  Dimmer,
  Loader,
  Segment,
  Header,
  Grid,
  Icon,
  Container,
  Table
} from "semantic-ui-react";

class Order extends React.Component {
  state = {
    order: null,
    loading: true
  };

  componentDidMount() {
    fetchApi(
      "get",
      `https://grocery-delivery-backend.herokuapp.com/api/v1/orders/${this.props.id}`
    ).then(json => {
      this.setState({
        order: json,
        loading: false
      });
    });
  }

  renderOrder() {
    const {
      name,
      email,
      street,
      city,
      state,
      zipcode,
      deliverytime,
      order_items,
      order_total
    } = this.state.order;
    return (
      <Container>
        <Segment>
          <Grid stackable columns={2} relaxed>
            <Grid.Row>
              <Grid.Column>
                <Header as="h3">Your Information</Header>
                <b>{name} </b>
                <p>{email} </p>
              </Grid.Column>

              <Grid.Column>
                <Header as="h3">Delivery Address</Header>
                <p>Street: {street} </p>
                <p>City: {city} </p>
                <p>State: {state} </p>
                <p>Zip Code: {zipcode} </p>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Header as="h3">Payment</Header>
                <Icon size="large" name="cc visa" />
                <p>Visa card ending in 1234</p>
              </Grid.Column>

              <Grid.Column>
                <Header>Delivery Details</Header>
                <p>ETA {deliverytime}</p>
                <p>Delivery via Honda Accord (license plate # 478-DT56)</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item Image</Table.HeaderCell>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
              <Table.HeaderCell>Delivery</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {order_items &&
              order_items.map(item => {
                let total = item.product.price * item.quantity;
                // let eachPrice = item.product.price * 1;
                return (
                  <Table.Row key={item.id}>
                    <Table.Cell>
                      <img src={item.product.image_url} width={60} alt="img" />
                    </Table.Cell>
                    <Table.Cell>{item.product.name}</Table.Cell>
                    <Table.Cell>{item.quantity}</Table.Cell>
                    <Table.Cell>Free</Table.Cell>
                    <Table.Cell>${total.toFixed(2)}</Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>

        <Segment floated="right" textAlign="center">
          <h3>Order Total ${parseFloat(order_total).toFixed(2)}</h3>
        </Segment>
      </Container>
    );
  }

  render() {
    const { order } = this.state;
    return (
      <div>
        {order ? (
          this.renderOrder()
        ) : (
          <div>
            <Dimmer active>
              <Loader size="massive">Getting your order details!</Loader>
            </Dimmer>
          </div>
        )}
      </div>
    );
  }
}

export default Order;
