import React, { Component } from "react";
import { Container, Grid, Image, Card, Icon, Button } from "semantic-ui-react";
import { withRouter, Redirect } from "react-router-dom";

class Products extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      userID: 1
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    fetch("https://localhost:3000/api/v1/products")
      // fetch("https://grocery-delivery-backend.herokuapp.com/api/v1/products")
      .then(response => response.json())
      .then(response => {
        console.log("fetchProducts: ", response);
        this.setState({
          products: response
        });
      });
  }

  handleAddToCart = event => {
    event.preventDefault();
    const user_id = this.state.userID;
    const product_id = parseInt(event.target.value);
    console.log(product_id);
    fetch("https://localhost:3000/api/v1/cart_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: user_id,
        product_id: product_id,
        quantity: 1
      })
    });
  };

  render() {
    console.log("Products Page Current State: ", this.state);
    let jwtThere = localStorage.getItem("jwt") ? true : false;
    //console.log("Products page, jwt? ", jwtThere);

    return (
      <div>
        {localStorage.getItem("jwt") ? (
          <Container textAlign="center">
            <div>
              <br></br>
              <h1>Products Page</h1>
              <br></br>
            </div>
            <Card.Group itemsPerRow={4}>
              {this.state.products.map(product => (
                <Card key={product.id} color="green">
                  <Image
                    src={product.image_url}
                    size="tiny"
                    verticalAlign="middle"
                    wrapped
                    ui={false}
                  />
                  <Card.Content>
                    <Card.Header>{product.name}</Card.Header>
                    <Card.Meta>
                      <span>{product.description}</span>
                    </Card.Meta>
                    {/* <Card.Description>
                      ${product.price} per {product.size}
                    </Card.Description> */}
                    ${product.price} per {product.size}
                  </Card.Content>
                  <Card.Content extra>
                    <Button
                      color="green"
                      value={product.id}
                      onClick={this.handleAddToCart}
                    >
                      <Icon name="add to cart" /> Add to Cart
                    </Button>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Container>
        ) : (
          <Redirect exact from="/" to="/login" />
        )}
      </div>
    );
  }
}

export default withRouter(Products);
