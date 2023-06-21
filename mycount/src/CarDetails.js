import { useRef, useState } from "react";

export default function CarDetails({ initialData }) {
  const [form, setForm] = useState({
    model: initialData.model,
    year: initialData.year,
    color: initialData.color,
  });

  const formRef = useRef();
  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();

  function handleModel() {
    setForm({ ...form, model: modelRef.current.value });
  }

  function handleYear() {
    setForm({ ...form, year: yearRef.current.value });
  }

  function handleColor() {
    setForm({ ...form, color: colorRef.current.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setForm({ model: "", year: "", color: "" });
  }
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input ref={modelRef} onChange={handleModel} value={form.model} />
        <label>Year</label>
        <input ref={yearRef} onChange={handleYear} value={form.year} />
        <label>Color</label>
        <input ref={colorRef} onChange={handleColor} value={form.color} />
        <button>Submit</button>
      </form>
    </div>
  );
}
