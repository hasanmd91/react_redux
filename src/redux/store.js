import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";
import { applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

const myLoger = (store) => (next) => (action) => {
  console.log(JSON.stringify(action));
  console.log(store.getState());

  return next(action);
};

const store = configureStore(
  {
    reducer: rootReducer,
  },
  applyMiddleware(myLoger, logger)
);

export default store;
