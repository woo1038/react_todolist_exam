import classNames from "classnames";
import React from "react";
import { MdDone, MdDelete } from "react-icons/md";
import classnames from "classnames";
import { useTodoDispatch } from "../TodoContext";

function TodoItem({ id, text, active }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      id,
    });
  };
  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id,
    });
  };

  return (
    <ul onClick={onToggle} className={classnames("TodoItem", { active })}>
      <li className="check">
        <MdDone />
      </li>
      <li className="text">{text}</li>
      <li onClick={onRemove} className="remove">
        <MdDelete />
      </li>
    </ul>
  );
}

export default React.memo(TodoItem);
