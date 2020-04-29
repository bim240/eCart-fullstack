const intialstate = {
  UserInfo: null,
};

export default function UserReducer(state = intialstate, action) {
  switch (action.payload) {
    case "LOGIN":
      return {
        ...state,
        UserInfo: action.payload,
      };

    default:
      return state;
  }
}
