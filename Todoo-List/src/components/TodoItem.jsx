import React, { useState } from "react";
import { FormControl, Form } from "react-bootstrap";
import { ReactComponent as DeleteIcon } from "../assets/trash-solid.svg";
import { ReactComponent as EditIcon } from "../assets/edit-solid.svg";
import { ReactComponent as SaveIcon } from "../assets/save-solid.svg";

function TodoItem({ item, setTodoList }) {
  const [newTodo, setNewTodo] = useState("");
  const setTodoComplete = (id) => {
    setTodoList((todoList) =>
      todoList.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };
  const deleteTodo = (selectedTodo) => {
    setTodoList((todoList) =>
      todoList.filter((item) => item.id !== selectedTodo.id)
    );
  };
  const editTodo = (selectedTodo) => {
    setNewTodo(selectedTodo.todo);
    setTodoList((todoList) =>
      todoList.map((item) =>
        item.id === selectedTodo.id ? { ...item, isEdit: true } : item
      )
    );
  };
  const saveTodo = (selectedTodo) => {
    setTodoList((todoList) =>
      todoList.map((item) =>
        item.id === selectedTodo.id
          ? { ...item, todo: newTodo, isEdit: false }
          : item
      )
    );
    setNewTodo("");
  };

  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex w-75">
        <Form.Check
          label=""
          key={item.id}
          type="checkbox"
          value={item.isCompleted}
          onChange={() => setTodoComplete(item.id)}
          id={item.id}
        />
        {item.isEdit ? (
          <FormControl
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          ></FormControl>
        ) : (
          <label
            htmlFor={item.id}
            className={`h5  ${
              item.isCompleted ? "text-decoration-line-through" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            {item.todo}
          </label>
        )}
      </div>

      <div className="d-flex">
        <div
          className="ms-3"
          onClick={() => deleteTodo(item)}
          style={{ cursor: "pointer" }}
        >
          <DeleteIcon width="25px" height="25px" />
        </div>
        <div
          className="ms-3"
          onClick={() => (item.isEdit ? saveTodo(item) : editTodo(item))}
          style={{ cursor: "pointer" }}
        >
          {item.isEdit ? (
            <SaveIcon width="25px" height="25px" />
          ) : (
            <EditIcon width="25px" height="25px" />
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
