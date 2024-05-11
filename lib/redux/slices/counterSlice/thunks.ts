/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";
import { incrementCountByAmount } from "@/lib/redux";

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  async (dispatch) => {
    // update only if currentValue is odd
    if (amount % 2 !== 0) {
      dispatch(incrementCountByAmount(amount));
    }
  };
