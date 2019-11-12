import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <Container>
        <Segment position="fixed" bottom="0" style={{ padding: "5em 0em" }}>
          FOOTER: Created and Designed by Hemesh Patel, placeholder for github
          link etc
        </Segment>
      </Container>
    );
  }
}

export default Footer;
