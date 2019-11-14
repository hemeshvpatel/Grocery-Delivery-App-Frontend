import React from "react";

import ProductListItem from "./product-list-item";
import {
  Grid,
  Card,
  Dimmer,
  Loader,
  Menu,
  Input,
  Pagination
} from "semantic-ui-react";
import { connect } from "react-redux";
import { paginate } from "../../utils/paginate";

import fetchApi from "../../modules/fetch-api";

class ProductListing extends React.Component {
  state = {
    loading: true,
    search: "",
    activeItem: "All",
    filteredProducts: [],
    pageSize: 12,
    activePage: 1
  };

  componentDidMount() {
    const { loadProducts } = this.props;
    fetchApi(
      "get",
      "https://grocery-delivery-backend.herokuapp.com/api/v1/products"
    ).then(json => {
      // fetchApi(
      //   "get",
      //   "https://grocery-delivery-backend.herokuapp.com/api/v1/products"
      // ).then(json => {
      loadProducts(json);
      //console.log("Products loaded:", json);
      this.setState({
        loading: false,
        products: this.props.products,
        filteredProducts: this.props.products
      });
    });
  }

  //Collect info as it is typed and update state
  handleChange = input => {
    this.setState({
      [input.target.name]: input.target.value
    });
    const lowercasedSearchInput = this.state.search.toLowerCase();
    //console.log("Search input: ", lowercasedSearchInput);

    //search filtered products in state
    const searchResults = this.state.products.filter(product => {
      let lowercasedProducts = product.name.toLowerCase();
      return lowercasedProducts.includes(lowercasedSearchInput);
    });

    this.setState({
      filteredProducts: searchResults
    });
  };

  handlePageChange = (e, { activePage }) => {
    this.setState({ activePage });
  };

  handleItemClickAll = (e, { name }) => {
    this.setState({
      activeItem: name,
      filteredProducts: this.props.products,
      activePage: 1
    });
  };

  handleItemClickFruitsAndVegetables = (e, { name }) => {
    const filtered = this.state.products.filter(
      product => product.category === "Fruits & Vegetables"
    );
    this.setState({
      activeItem: name,
      filteredProducts: filtered,
      activePage: 1
    });
  };

  handleItemClickBeverages = (e, { name }) => {
    const filtered = this.state.products.filter(
      product => product.category === "Beverages"
    );
    this.setState({
      activeItem: name,
      filteredProducts: filtered,
      activePage: 1
    });
  };

  handleItemClickBakeryAndBread = (e, { name }) => {
    const filtered = this.state.products.filter(
      product => product.category === "Bakery & Bread"
    );
    this.setState({
      activeItem: name,
      filteredProducts: filtered,
      activePage: 1
    });
  };

  handleItemClickDairyAndEggs = (e, { name }) => {
    const filtered = this.state.products.filter(
      product => product.category === "Dairy & Eggs"
    );
    this.setState({
      activeItem: name,
      filteredProducts: filtered,
      activePage: 1
    });
  };

  handleItemClickFrozenFoods = (e, { name }) => {
    const filtered = this.state.products.filter(
      product => product.category === "Frozen Food"
    );
    this.setState({
      activeItem: name,
      filteredProducts: filtered,
      activePage: 1
    });
  };

  handleItemClickPantry = (e, { name }) => {
    const filtered = this.state.products.filter(
      product => product.category === "Pantry"
    );
    this.setState({
      activeItem: name,
      filteredProducts: filtered,
      activePage: 1
    });
  };

  render() {
    const { addToCart, removeFromCart, cart } = this.props;
    const { length: count } = this.state.filteredProducts;
    const { activeItem, pageSize, filteredProducts, activePage } = this.state;

    const pagesCount = Math.ceil(count / pageSize);
    const paginatedProducts = paginate(filteredProducts, activePage, pageSize);
    //console.log("Home State: ", this.state);
    //console.log("Paginated Products", paginatedProducts);

    return (
      <div>
        {this.state.loading ? (
          <div>
            <Dimmer active inverted>
              <Loader size="massive">
                Picking fresh products for you to shop!
              </Loader>
            </Dimmer>
          </div>
        ) : (
          <Grid>
            <Grid.Column width={3}>
              <Menu vertical>
                <Menu.Item>
                  <Input
                    icon="search"
                    name="search"
                    placeholder="Search..."
                    onChange={this.handleChange}
                  />
                </Menu.Item>
                <Menu.Item>
                  <Menu.Header>Products</Menu.Header>

                  <Menu.Menu>
                    <Menu.Item
                      name="All"
                      active={activeItem === "All"}
                      onClick={this.handleItemClickAll}
                    />
                    <Menu.Item
                      name="Fruits and Vegetables"
                      active={activeItem === "Fruits and Vegetables"}
                      onClick={this.handleItemClickFruitsAndVegetables}
                    />
                    <Menu.Item
                      name="Beverages"
                      active={activeItem === "Beverages"}
                      onClick={this.handleItemClickBeverages}
                    />
                    <Menu.Item
                      name="Bakery and Bread"
                      active={activeItem === "Bakery and Bread"}
                      onClick={this.handleItemClickBakeryAndBread}
                    />
                    <Menu.Item
                      name="Dairy and Eggs"
                      active={activeItem === "Dairy and Eggs"}
                      onClick={this.handleItemClickDairyAndEggs}
                    />
                    <Menu.Item
                      name="Frozen Foods"
                      active={activeItem === "Frozen Foods"}
                      onClick={this.handleItemClickFrozenFoods}
                    />
                    <Menu.Item
                      name="Pantry"
                      active={activeItem === "Pantry"}
                      onClick={this.handleItemClickPantry}
                    />
                  </Menu.Menu>
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={13}>
              <Card.Group itemsPerRow={4}>
                {/* {this.state.filteredProducts.length === 0
                  ? products.map(product => (
                      <ProductListItem
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        cartItem={
                          cart.filter(cartItem => cartItem.id === product.id)[0]
                        }
                      />
                    ))
                  : this.state.filteredProducts.map(product => (
                      <ProductListItem
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        cartItem={
                          cart.filter(cartItem => cartItem.id === product.id)[0]
                        }
                      />
                    ))} */}

                {paginatedProducts.map(product => (
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
        {/* <PaginationCompact
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        /> */}
        <div align="right">
          <br></br>
          <Pagination
            activePage={activePage}
            siblingRange={10}
            totalPages={pagesCount}
            onPageChange={this.handlePageChange}
          ></Pagination>
        </div>
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
