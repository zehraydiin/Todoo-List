import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function TodoInput({ setTodoList }) {
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    setTodoList((todoList) => [
      ...todoList,
      { todo, id: uuid(), isCompleted: false, isEdit: false },
    ]);
    setTodo("");
  };
  return (
    <div className="d-flex w-100 justify-content-center mt-3">
      <Form.Control
        type="text"
        aria-label="Text input with dropdown button"
        value={todo}
        className="w-50 me-5"
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button onClick={() => addTodo()}>Add Todo</Button>
    </div>
  );
}

export default TodoInput;
