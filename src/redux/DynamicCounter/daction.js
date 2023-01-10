import { DynamicIncrement, DynamicDecrement } from "./dactionTypes";

export const dincrement = (value) => {
  return {
    type: DynamicIncrement,
    payload: value,
  };
};

export const ddecrement = (value) => {
  return {
    type: DynamicDecrement,
    payload: value,
  };
};
