import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import {
  increment,
  decrement,
  reset,
  incrementByAmmount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmmount, setIncrementAmmount] = useState(0);

  //Extra para controlar que incrementAmmount sexa un numero
  const addValue = Number(incrementAmmount) || 0;

  //Extra para poñer a incrementAmmount a 0 outra vez
  const resetAll = () => {
    setIncrementAmmount(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div role="form">
        <label htmlFor="increment-ammount">Ammount to add: </label>
        <input
          type="number"
          name="increment-ammount"
          id="increment-ammount"
          value={incrementAmmount}
          onChange={(e) => setIncrementAmmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmmount(addValue))}>
          Add ammount
        </button>

        <br />
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
