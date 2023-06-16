import useCounter from "./UseCounter";

export default function Counter({ initValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } = useCounter(initValue);

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={onIncrement}>Add</button>
      <button onClick={onDecrement}>Remove</button> <br />
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
