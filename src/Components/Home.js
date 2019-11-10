import React, { Component } from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import { withRouter, Redirect } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  componentDidMount() {
    localStorage.getItem("jwt")
      ? this.setState({ isLoggedIn: true })
      : this.setState({ isLoggedIn: false });
  }

  handlePushtoProductsPage = event => {
    this.props.history.push("/products");
  };

  render() {
    //console.log("Home Page Current State: ", this.state);
    return (
      <div>
        {localStorage.getItem("jwt") ? (
          <Container textAlign="center">
            <div>
              <br></br>
              <h1>Select a store to begin shopping</h1>
              <h2>Only The Fresh Market will be active for demo purposes</h2>
              <br></br>
            </div>
            <Grid relaxed columns={3} divided padded>
              <Grid.Row>
                <Grid.Column>
                  <Image
                    centered
                    src="data:image/png;base64,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"
                    size="medium"
                    verticalAlign="middle"
                    onClick={this.handlePushtoProductsPage}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062011/heb_logo_gloss.ai_.png?itok=M-w9tUZX"
                    size="medium"
                    verticalAlign="middle"
                    disabled
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    src="https://www.bing.com/th?id=OIP.I06Uh5b1HK0EcVcZTY6X9gHaGG&w=211&h=173&c=7&o=5&dpr=1.8&pid=1.7"
                    size="medium"
                    verticalAlign="middle"
                    disabled
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Image
                    centered
                    src="https://www.bing.com/th?id=OIP._AtbpaapvsdGyQH4ICX2qgAAAA&pid=Api&rs=1"
                    size="medium"
                    verticalAlign="middle"
                    disabled
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    src="https://www.bing.com/th?id=OIP.zX-j35X7OaG35FEjm0lcIwHaHa&w=222&h=210&c=7&o=5&dpr=1.8&pid=1.7"
                    size="medium"
                    verticalAlign="middle"
                    disabled
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    src="http://frugalbits.com/wp-content/uploads/2012/01/Trader-Joes-Logo.jpg"
                    size="medium"
                    verticalAlign="middle"
                    disabled
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        ) : (
          <Redirect exact from="/" to="/login" />
        )}
      </div>
    );
  }
}

export default withRouter(Home);
