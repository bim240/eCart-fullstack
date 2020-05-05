import { combineReducers } from "redux";

import UserReducres from "./user";
import adminUser from "./admin/AdminUserReducers";
import AdminProductReducer from "./admin/AdminProductReducser";
import allProductReducer from "./allProductReducer";
import ErrorReducer from "./errorReducer";

export let rootReducer = combineReducers({
  User: UserReducres,
  AdminOnUser: adminUser,
  AdminOnProducts: AdminProductReducer,
  AllProduct: allProductReducer,
  Error: ErrorReducer,
});
