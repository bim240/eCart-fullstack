var initialState = {
  allProduct: "",
  filterKey: "all",
};

export default function AdminProductReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return {
        ...state,
        allProduct: action.payload,
      };
    case "ADD":
      return {
        ...state,
        allProduct: state.allProduct.concat(action.payload),
      };
    case "DELETE":
      return {
        ...state,
        allProduct: state.allProduct.filter(
          (product) => product._id != action.payload._id
        ),
      };
    default:
      return state;
  }
}
