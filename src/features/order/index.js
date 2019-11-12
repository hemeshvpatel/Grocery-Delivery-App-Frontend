import React from "react";

import fetchApi from "../../modules/fetch-api";

import { Container, Dimmer, Loader } from "semantic-ui-react";

class Order extends React.Component {
  state = {
    order: null,
    loading: true
  };

  componentDidMount() {
    fetchApi(
      "get",
      `http://localhost:3000/api/v1/orders/${this.props.id}`
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
      order_items
    } = this.state.order;
    return (
      <Container>
        <h1>Customer Info: </h1>
        <h2>Name: {name} </h2>
        <h2>Email: {email} </h2>
        <br />
        <h1>Items Ordered:</h1>
        <ul>
          {order_items &&
            order_items.map(item => {
              let total = item.product.price * item.quantity;
              let eachPrice = item.product.price * 1;
              return (
                <li>
                  <img src={item.product.image_url} width={32} alt="img" />
                  {item.product.name}({item.quantity} @ ${eachPrice.toFixed(2)}{" "}
                  = ${total.toFixed(2)})
                </li>
              );
            })}
        </ul>
        <h1>Delivery Info:</h1>
        <p>Street: {street} </p>
        <p>City: {city} </p>
        <p>State: {state} </p>
        <p>Zip Code: {zipcode} </p>
        <p>Delivery Time: {deliverytime}</p>
        <h2>Delivery is on it's way and will arrive between {deliverytime}</h2>
        <h2>
          Driver will be delivering your order in a Honda Accord (license plate
          # 456-7880)
        </h2>
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
