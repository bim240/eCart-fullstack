const initialstate = {
  UserInfo: null,
};

export default function UserReducer(state = initialstate, action) {
  console.log("inside login reducer");
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        UserInfo: action.payload,
      };

    default:
      return state;
  }
}
