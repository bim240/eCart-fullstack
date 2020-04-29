import { createStore } from "redux";

import { rootReducer } from "./reducers";

export let store = createStore(rootReducer);
