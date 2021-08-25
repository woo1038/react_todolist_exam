import classnames from "classnames";
import React, { useReducer, useState } from "react";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const initialInput = {
  open: false,
  value: "",
};

function inputReducer(state, action) {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        open: !state.open,
      };
    case "VALUE":
      return {
        ...state,
        value: action.value,
      };
    case "CLEAR":
      return initialInput;
    default:
      throw new Error("Reducer Error");
  }
}

function TodoInput() {
  const [state, inDispatch] = useReducer(inputReducer, initialInput);
  const onToggle = () =>
    inDispatch({
      type: "OPEN",
    });

  const { open, value } = state;
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onChange = (e) => {
    const { value } = e.target;

    inDispatch({
      type: "VALUE",
      value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        active: false,
      },
    });
    nextId.current += 1;
    inDispatch({
      type: "CLEAR",
    });
  };

  return (
    <>
      <form onSubmit={onSubmit} className={classnames("TodoInput", { open })}>
        <input
          onChange={onChange}
          type="text"
          placeholder="할 일을 입력 후 Enter를 누르세요"
          value={value}
        />
      </form>
      <div onClick={onToggle} className={classnames("TodoAdd", { open })}>
        <MdAdd />
      </div>
    </>
  );
}

export default React.memo(TodoInput);
