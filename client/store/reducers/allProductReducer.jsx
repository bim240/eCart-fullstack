let initialState = {
  allProduct: "",
  activeCategory: "",
};

export default function allProductReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case "ALL_PRODUCT":
      return {
        ...state,
        allProduct: action.payload,
      };

    default:
      return state;
  }
}
