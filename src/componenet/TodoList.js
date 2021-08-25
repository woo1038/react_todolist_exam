import React from "react";
import { useTodoState } from "../TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useTodoState();

  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          active={todo.active}
        />
      ))}
    </div>
  );
}

export default TodoList;
