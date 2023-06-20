import { useNavigate } from "react-router";

export default function Page1() {
  const goTo2 = useNavigate();

  function handleFunction() {
    goTo2("/Page2");
  }

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={handleFunction}>Netx page</button>
    </div>
  );
}
