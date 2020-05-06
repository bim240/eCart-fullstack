const initialstate = {
  UserInfo: null,
};

export default function UserReducer(state = initialstate, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        UserInfo: action.payload,
      };
    case "UPDATE":
      return {
        ...state,
        UserInfo: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        UserInfo: action.payload,
      };
    default:
      return state;
  }
}
