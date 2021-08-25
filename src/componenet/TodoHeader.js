import React from "react";
import { useTodoState } from "../TodoContext";

function TodoHeader() {
  const todos = useTodoState();
  const remainNum = todos.filter((todo) => !todo.active);

  const today = new Date();
  const dateString = today.toLocaleDateString("kr-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayString = today.toLocaleDateString("kr-KR", {
    weekday: "long",
  });

  return (
    <ul className="TodoHeader">
      <h1>{dateString}</h1>
      <li className="day">{dayString}</li>
      <li className="remain">할 일 {remainNum.length}개 남음</li>
    </ul>
  );
}

export default TodoHeader;
