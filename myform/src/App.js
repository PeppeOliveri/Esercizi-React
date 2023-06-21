import Language from "./Language";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <TodoList
        render={(items, removeItem) => {
          return (
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  {item}
                  <button onClick={() => removeItem(index)}>Remove</button>
                </li>
              ))}
            </ul>
          );
        }}
      />
      <Language />
    </div>
  );
}

export default App;
