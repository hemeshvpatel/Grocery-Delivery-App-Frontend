import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ProductListItem from "./product-list-item";
import { Grid, Card, Dimmer, Loader, Menu, Input } from "semantic-ui-react";
import { connect } from "react-redux";

import fetchApi from "../../modules/fetch-api";
// const useFetch = url => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   async function fetchData() {
//     const response = await fetch(url);
//     const json = await response.json();
//     setData(json);
//     setLoading(false);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return { loading, data };
// };

class ProductListing extends React.Component {
  // const { loading, data } = useFetch("http://localhost:3000/api/v1/products");
  //console.log("Products Index: ", data);

  state = {
    loading: true
  };

  componentDidMount() {
    const { loadProducts } = this.props;
    fetchApi("get", "http://localhost:3000/api/v1/products").then(json => {
      loadProducts(json);
      console.log("Products loaded:", json);
      this.setState({
        loading: false
      });
    });
  }

  handleItemClick = name => this.setState({ activeItem: name });

  render() {
    const { addToCart, removeFromCart, products, cart } = this.props;
    const { activeItem } = this.state;
    return (
      <div>
        {this.state.loading ? (
          <div>
            <Dimmer active>
              <Loader size="massive">Loading</Loader>
            </Dimmer>
          </div>
        ) : (
          <Grid>
            <Grid.Column width={3}>
              <Menu vertical>
                <Menu.Item>
                  <Input placeholder="Search..." />
                </Menu.Item>
                <Menu.Item>
                  <Menu.Header>Products</Menu.Header>

                  <Menu.Menu>
                    <Menu.Item
                      name="Fruits & Vegetables"
                      active={activeItem === "enterprise"}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name="Beverages"
                      active={activeItem === "consumer"}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name="Bakery & Bread"
                      active={activeItem === "enterprise"}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name="Dairy & Eggs"
                      active={activeItem === "enterprise"}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name="Frozen Foods"
                      active={activeItem === "enterprise"}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name="Pantry"
                      active={activeItem === "enterprise"}
                      onClick={this.handleItemClick}
                    />
                  </Menu.Menu>
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={13}>
              <Card.Group>
                {products.map(product => (
                  <ProductListItem
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    cartItem={
                      cart.filter(cartItem => cartItem.id === product.id)[0]
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
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: products => {
      dispatch({ type: "LOAD", payload: products });
    },
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
