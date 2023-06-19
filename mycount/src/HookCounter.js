import { useCallback, useState } from "react";

export function HookCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((c) => c + 1);
  }, []);

  const handleDecrement = useCallback(function handleDecrement() {
    setCounter((c) => c - 1);
  }, []);

  const handleReset = useCallback(
    function handleReset() {
      setCounter(initialValue);
    },
    [initialValue]
  );

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
