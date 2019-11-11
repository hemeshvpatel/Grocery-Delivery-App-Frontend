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
    const { name, email, order_items } = this.state.order;
    return (
      <Container>
        <h2>Name: {name} </h2>
        <h2>Email: {email} </h2>
        <h2>Items</h2>
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
        <h2>Delivery is on it's way and will arrive at 6:45pm</h2>
        <h3>
          Driver will be delivering your order in a Honda Accord (license plate
          # 456-7880)
        </h3>
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
