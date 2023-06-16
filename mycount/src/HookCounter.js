import { useEffect, useState } from "react";

export function HookCounter({ initialValue = 0 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleIncrement() {
    setCounter((c) => c + 1);
  }

  useEffect(() => {
    console.log("the counter is now: " + counter);
  }, [counter]);

  useEffect(() => {
    const int = setInterval(() => {
      setCounter(0);
    }, 3000);

    return () => {
      clearInterval(int);
    };
  }, [counter]);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
