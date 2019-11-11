import React from "react";

import fetchApi from "../../modules/fetch-api";

import { Dimmer, Loader } from "semantic-ui-react";

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
      <div>
        <h3>Order Info</h3>
        <div>Name: {name} </div>
        <div>Email: {email} </div>
        <h4>Items</h4>
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
      </div>
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
