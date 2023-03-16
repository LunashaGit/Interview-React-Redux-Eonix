import { createStructuredSelector } from "reselect";

import { makeSelectHomeContainerCounter } from "./selector";
import { incrementAction, decrementAction } from "./action";

export const mapStateToProps = createStructuredSelector({
  counter: makeSelectHomeContainerCounter(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onIncrement: () => dispatch(incrementAction()),
    onDecrement: () => dispatch(decrementAction()),
  };
}
