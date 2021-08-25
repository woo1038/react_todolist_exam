import classnames from "classnames";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";



function TodoInput() {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => {
    setValue(e.target.value);
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
    setValue("");
    setOpen(false);
    nextId.current += 1;
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
