"use client";

/* Core */
import { useCallback, useState, ChangeEvent } from "react";

/* Instruments */
import {
  useSelector,
  selectCount,
  decrementCount,
  incrementCount,
  incrementCountByAmount,
  incrementIfOddAsync,
} from "@/lib/redux";
import styles from "./counter.module.css";
import { useDispatch } from "react-redux";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch<any>();

  // Create a state named incrementAmount
  const [incrementAmount, setIncrementAmount] = useState<string | number>("");

  const handleAmountKeyUp = (event: any) => {
    if (event.code === "Enter") {
      handleAmountInput(event);
      handleAddAmount();
    }
  };

  const handleAmountInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    if (!isNaN(+value)) {
      setIncrementAmount(+value);
    } else {
      setIncrementAmount("");
    }
  };

  const handleAddAmount = useCallback(() => {
    if (incrementAmount == "") {
      return;
    }

    if (!Number.isNaN(incrementAmount)) {
      dispatch(incrementCountByAmount(+incrementAmount));
      setIncrementAmount("");
    }
  }, [incrementAmount]);

  const handleAddOddAmount = useCallback(() => {
    if (incrementAmount == "") {
      return;
    }
    if (!Number.isNaN(incrementAmount)) {
      dispatch(incrementIfOddAsync(+incrementAmount));
      setIncrementAmount("");
    }
  }, [incrementAmount]);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrementCount())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(incrementCount())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onKeyUp={handleAmountKeyUp}
          onChange={handleAmountInput}
        />
        <button className={styles.button} onClick={handleAddAmount}>
          Add Amount
        </button>
        <button className={styles.button} onClick={handleAddOddAmount}>
          Add If Odd
        </button>
      </div>
    </div>
  );
};
