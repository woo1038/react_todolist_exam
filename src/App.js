import logo from "./logo.svg";
import "./App.css";
import TodoSection from "./componenet/TodoSection";
import TodoHeader from "./componenet/TodoHeader";
import TodoList from "./componenet/TodoList";
import TodoInput from "./componenet/TodoInput";
import { TodoProvider } from "./TodoContext";
import TodoInput2 from "./componenet/TodoInput(reduce)";

function App() {
  return (
    <TodoProvider>
      <TodoSection>
        <TodoHeader />
        <TodoList />
        <TodoInput />
      </TodoSection>
    </TodoProvider>
  );
}

export default App;
