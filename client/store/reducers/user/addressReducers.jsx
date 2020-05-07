let initialState = {
  addresses: [],
};
export default function AddressReducer(state = initialState, action) {
  switch (action.type) {
    case "ALL_ADDRESS":
      // console.log(action.payload, "reducers");
      return {
        ...state,
        addresses: action.payload,
      };
    case "ADD_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.concat(action.payload),
      };
    case "DELETE_ADDRESS":
      return {
        ...state,
        addresses: state.addresses.filter(
          (address) => address._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
}
