import React from "react";

import { Dimmer, Loader, Grid, Card } from "semantic-ui-react";

import OrderListCard from "./order-list-card";

import fetchApi from "../../modules/fetch-api";

class Profile extends React.Component {
  state = { allOrders: [], loading: true };
  currentUser = JSON.parse(localStorage.getItem("user"));
  componentDidMount() {
    fetchApi(
      "get",
      `https://grocery-delivery-backend.herokuapp.com/api/v1/orders`
    ).then(json => {
      const data = json;
      const filtered = data.filter(order => {
        return order.user_id === this.currentUser.id;
      });
      this.setState({
        allOrders: json,
        currentUserOrders: filtered,
        loading: false
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>
            <Dimmer active inverted>
              <Loader size="massive">Loading your Order History ...</Loader>
            </Dimmer>
          </div>
        ) : (
          <Grid verticalAlign="middle" centered>
            <Card.Group itemsPerRow={2}>
              {this.state.currentUserOrders.map(order => (
                <OrderListCard key={order.id} order={order} />
              ))}
            </Card.Group>
          </Grid>
        )}
      </div>
    );
  }
}

export default Profile;
