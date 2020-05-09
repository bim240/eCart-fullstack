let initialState = {
  cart: [],
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_CART_ITEM":
      // console.log(action.payload, "getting all the product");
      return {
        ...state,
        cart: action.payload,
      };
    case "ADD_CART_ITEM":
      // console.log(action.payload, "adding a product");
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };
    case "DELETE_CART_ITEM":
      // console.log(action.payload, "removiing a  product");
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    case "PLACE_ORDER":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
}
