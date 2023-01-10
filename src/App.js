import React from "react";
import { Provider } from "react-redux";
import Counter from "./redux/Counter/Counter";
import store from "./redux/store";
import DCounter from "./redux/DynamicCounter/DynmaicCounter";

const App = () => {
  return (
    <div className="div">
      <Provider store={store}>
        <Counter />
        <DCounter />
      </Provider>
    </div>
  );
};

export default App;
