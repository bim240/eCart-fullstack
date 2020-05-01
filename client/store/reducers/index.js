import { combineReducers } from "redux";

import UserReducres from "./user";
import adminUser from "./admin/AdminUserReducers";
import AdminProductReducer from "./admin/AdminProductReducser";
export let rootReducer = combineReducers({
  User: UserReducres,
  AdminOnUser: adminUser,
  AdminOnProducts: AdminProductReducer,
});
