import { useState, useMemo, useEffect } from "react";

export default function FilteredList({ list }) {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(list);
  }, [list]);

  const memo = useMemo(() => {
    return arr.filter((element) => {
      return element.age > 18;
    });
  }, [arr]);

  return (
    <div>
      <h2>Lista di persone maggiorenni</h2>
      <ul>
        {memo.map((element, indx) => (
          <li key={indx}>{element.name}</li>
        ))}
      </ul>
    </div>
  );
}
