import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <TodoList
        fruits={[
          "apple",
          "banana",
          "orange",
          "mango",
          "grape",
          "kiwi",
          "pineapple",
          "strawberry",
          "watermelon",
        ]}
      />
    </div>
  );
}

export default App;
