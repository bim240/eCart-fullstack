export default function ErrorReducer(state = "", action) {
  switch (action.type) {
    case "REMOVE_ERROR":
      return null;
    case "ADD_ERROR":
      return action.error;
    default:
      return state;
  }
}
