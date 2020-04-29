import { combineReducers } from "redux";

import UserReducres from "./user";

export let rootReducer = combineReducers({
  User: UserReducres,
});
