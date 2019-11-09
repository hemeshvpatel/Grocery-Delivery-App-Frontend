import React, { Component } from "react";
import { Container, Grid, Image, Card, Icon, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import Cart from "./Cart";
import { fetchProducts } from "../actions/productActions";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [], cartItems: [] };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  componentWillMount() {
    this.props.fetchProducts();
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }
  }

  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    console.log("Products State: ", this.state);
    return (
      <div>
        <Container textAlign="center">
          <div>
            <br></br>
            <h1>Products Page</h1>
            <br></br>
          </div>
          <Grid container columns={2}>
            <Grid.Column width={5}>
              <Cart
                cartItems={this.state.cartItems}
                handleRemoveFromCart={this.handleRemoveFromCart}
              />
            </Grid.Column>
            <Grid.Column width={11}>
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
                      <Card.Header>ID: {product.id}</Card.Header>
                      <Card.Meta>
                        <span>{product.description}</span>
                      </Card.Meta>
                      ${product.price} per {product.size}
                    </Card.Content>
                    <Card.Content extra>
                      <Button
                        color="green"
                        onClick={e => this.handleAddToCart(e, product)}
                      >
                        <Icon name="add to cart" /> Add to Cart
                      </Button>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products.items
  };
};

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Products);
