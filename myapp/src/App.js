import Hello from "./Hello";
import Message from "./Message";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Hello />
      <Message />
      <Welcome name="Gigi" />
    </div>
  );
}

export default App;
