var initialState = {
  allUser: "",
};

export default function adminUser(state = initialState, action) {
  switch (action.type) {
    case "ALL_USER":
      return { ...state, allUser: action.payload };
    case "UPDATE_BLOCK":
      return {
        ...state,
        allUser: state.allUser.map((user) => {
          if (user.id === action.payload.id) {
            return action.payload;
          }
          return user;
        }),
      };
    default:
      return state;
  }
}
