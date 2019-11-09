import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

import Router from "./Router";
import Navigation from "./components/navigation";

import { Container } from "semantic-ui-react";

// const Navigation2 = props => (
//   <Menu>
//     <Menu.Item>
//       <NavLink to="/">Home</NavLink>
//     </Menu.Item>
//     <Menu.Item>
//       <NavLink to="/cart">Cart</NavLink>
//     </Menu.Item>
//   </Menu>
// );

class App extends Component {
  render() {
    return (
      <Container>
        <div>
          <Navigation />
          {/* <Navigation2 /> */}
          <Router />
        </div>
      </Container>
    );
  }
}

export default App;
