import { useNavigate } from "react-router";

export default function Page3() {
  const goHome = useNavigate();

  function handleButton() {
    goHome("/");
  }

  return (
    <div>
      <h1>Fine</h1>
      <button onClick={handleButton}>Go home</button>
    </div>
  );
}
