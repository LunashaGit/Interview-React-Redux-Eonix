import { INCREMENT, DECREMENT } from "./constant";

export const initialState = {
  counter: 0,
};

export default function homeContainerReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        // counter can't be less than 0
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };
    default:
      return state;
  }
}