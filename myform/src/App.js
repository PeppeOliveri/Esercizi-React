import Language from "./Language";
// import TodoList from "./TodoList";

function App() {
  return (
    <div>
      {/* <TodoList
        render={(items, removeItem) => {
          return (
            <div>
              {items.map((item) => (
                <li key={item.toString()}>
                  {item}
                  <button onClick={removeItem}>Remove</button>
                </li>
              ))}
            </div>
          );
        }}
      /> */}
      <Language />
    </div>
  );
}

export default App;
