import { DynamicIncrement, DynamicDecrement } from "./dactionTypes";

const initialState = {
  value: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DynamicIncrement:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case DynamicDecrement:
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};

export default reducer;
