import { combineReducers } from "redux";

import counterReducer from "./Counter/counterReducer";
import dynamicReducer from "./DynamicCounter/DynamicReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  dcount: dynamicReducer,
});

export default rootReducer;
