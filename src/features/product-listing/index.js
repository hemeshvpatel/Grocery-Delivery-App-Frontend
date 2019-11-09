import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import ProductListItem from "./product-list-item";
import { Grid, Card } from "semantic-ui-react";

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
export default function ProductListing() {
  const { loading, data } = useFetch("http://localhost:3000/api/v1/products");
  console.log("Products Index: ", data);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Grid>
          <Grid.Column width={3}>Categories and Filters</Grid.Column>
          <Grid.Column width={13}>
            <Card.Group>
              {data.map(product => (
                <ProductListItem product={product} />
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid>
      )}
    </div>
  );
}
