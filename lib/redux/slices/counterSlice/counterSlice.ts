/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment, decreament, incrementByAmount loginc here
    incrementCount: (state) => {
      state.value += 1;
    },
    decrementCount: (state) => {
      state.value -= 1;
    },
    incrementCountByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementCount, decrementCount, incrementCountByAmount } =
  counterSlice.actions;

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}
