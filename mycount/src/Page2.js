import { useNavigate } from "react-router";

export default function Page2() {
  const goTo3 = useNavigate();

  function handleButton() {
    goTo3("/Page3");
  }

  return (
    <div>
      <h1>Secondary page</h1>
      <button onClick={handleButton}>Third page</button>
    </div>
  );
}
