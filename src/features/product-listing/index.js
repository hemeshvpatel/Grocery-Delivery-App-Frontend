import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ProductListItem from "./product-list-item";
import { Grid, Card, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { cartItemsWithQuantities } from "../cart";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data };
};

function ProductListing(props) {
  const { loading, data } = useFetch("http://localhost:3000/api/v1/products");
  //console.log("Products Index: ", data);
  return (
    <div>
      {loading ? (
        <div>
          <Dimmer active>
            <Loader size="massive">Loading</Loader>
          </Dimmer>
        </div>
      ) : (
        <Grid>
          <Grid.Column width={2}>Categories and Filters</Grid.Column>
          <Grid.Column width={14}>
            <Card.Group centered>
              {data.map(product => (
                <ProductListItem
                  key={product.id}
                  product={product}
                  addToCart={props.addToCart}
                  removeFromCart={props.removeFromCart}
                  cartItem={
                    props.cart.filter(cartItem => cartItem.id === product.id)[0]
                  }
                />
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
