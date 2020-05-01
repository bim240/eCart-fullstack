var initialState = {
  allUser: "",
};

export default function adminUser(state = initialState, action) {
  switch (action.type) {
    case "ALL_USER":
      return { ...state, allUser: action.payload };

    default:
      return state;
  }
}
