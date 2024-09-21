import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./store/store";
import { decrement, increment, incrementByAmount } from "./store/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  // Get the current counter value from the store, typed as RootState
  const count = useSelector((state: RootState) => state.counter.value);

  // Get the dispatch function, typed as AppDispatch
  const dispatch = useDispatch<AppDispatch>();

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) || 0; // Convert input to a number
    setAmount(value);
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      <div>
        {/* Display the current amount */}
        <p>Current Amount: {amount}</p>

        {/* Input field to update the amount */}
        <input
          type="number"
          value={amount}
          onChange={handleInputChange}
        />
      </div>

      <button
        aria-label="Increment by Amount"
        onClick={() => dispatch(incrementByAmount(amount))}
      >
        Decrement by Amount
      </button>
    </div>
  )
}

export default App
