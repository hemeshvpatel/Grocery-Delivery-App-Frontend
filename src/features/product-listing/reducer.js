const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD":
      return action.payload;

    default:
      return state;
  }
};

export default productsReducer;
