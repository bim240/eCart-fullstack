export default function ErrorReducer(state = "", action) {
  switch (action.type) {
    case "REMOVE_ERROR":
      return {...state, state =""}
    case "ADD_ERROR":
      return {...state, state:action.error}
    default:
      state;
  }
}