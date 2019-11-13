import React from "react";
import { Container, Pagination } from "semantic-ui-react";

const PaginationCompact = props => {
  return (
    <Container textAlign="right">
      <br></br>
      <Pagination
        boundaryRange={0}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={3}
      />
    </Container>
  );
};

export default PaginationCompact;
