import {combineReducers, legacy_createStore as createStore, compose, applyMiddleware,} from "redux";
import { logger, tes } from "../middleW/logger";
import { colorReducer } from "../reducer/colorReducer";
import { reducer } from "../reducer/countReducer";
import thunk from "redux-thunk";

import { authProgress } from "../reducer/regresReducer";
export const allReducers = combineReducers({
  count: reducer,
  color: colorReducer,
  authProgress : authProgress
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);

// export const store = createStore(
//   allReducers,
//   composeEnhancers(applyMiddleware(logger,tes))
// );

//membuet Store
// export const store = createStore(
//   allReducers /*preloade, */,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
