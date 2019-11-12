import React from "react";

import { Container, Dimmer, Loader, Grid, Card } from "semantic-ui-react";

import OrderListCard from "./order-list-card";

import fetchApi from "../../modules/fetch-api";

class Profile extends React.Component {
  state = { allOrders: [], loading: true };

  componentDidMount() {
    fetchApi(
      "get",
      `https://grocery-delivery-backend.herokuapp.com/api/v1/orders`
    ).then(json => {
      this.setState({
        allOrders: json,
        loading: false
      });
    });
  }

  render() {
    console.log("ORDER HISTORY: ", this.state.allOrders);
    return (
      <div>
        {this.state.loading ? (
          <div>
            <Dimmer active inverted>
              <Loader size="massive">Loading</Loader>
            </Dimmer>
          </div>
        ) : (
          <Container>
            <Grid.Column width={13}>
              <Card.Group itemsPerRow={4}>
                {this.state.allOrders.map(order => (
                  <OrderListCard key={order.id} order={order} />
                ))}
              </Card.Group>
            </Grid.Column>
          </Container>
        )}
      </div>
    );
  }
}

export default Profile;
