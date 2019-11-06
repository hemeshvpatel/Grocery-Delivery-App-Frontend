import React, { Component } from "react";
import { Container, Grid, Image, Card, Icon } from "semantic-ui-react";

class Products extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      products: []
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    fetch("http://localhost:3000/api/v1/products")
      // fetch("https://grocery-delivery-backend.herokuapp.com/api/v1/products")
      .then(response => response.json())
      .then(response => {
        console.log("fetchProducts: ", response);
        this.setState({
          products: response
        });
      });
  }

  render() {
    console.log("Products Page Current State: ", this.state);
    return (
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
                <Card.Description>{product.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="add to cart" />${product.price} per {product.size}
                </a>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    );
  }
}

export default Products;
