import { combineReducers } from "redux";

import UserReducres from "./user";
import adminUser from "./admin/AdminUserReducers";

export let rootReducer = combineReducers({
  User: UserReducres,
  AdminOnUser: adminUser,
});
