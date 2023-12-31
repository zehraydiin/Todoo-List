import "./App.css";
import React, { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    console.log(todoList);
    setTodoList((todoList) =>
      todoList.sort((a, b) =>
        a.isCompleted === b.isCompleted ? 0 : !a.isCompleted ? -1 : 1
      )
    );
  }, [todoList]);

  return (
    <div
      className="w-100 d-flex justify-content-center"
      style={{ paddingTop: "15vh" }}
    >
      <div className="w-75 d-flex align-items-center flex-column">
        <h1>Todo List</h1>
        <TodoInput setTodoList={setTodoList} />
        <div className="d-flex mt-3 flex-column w-75">
          {todoList
            .sort((a, b) =>
              a.isCompleted === b.isCompleted ? 0 : !a.isCompleted ? -1 : 1
            )
            ?.map((item) => (
              <TodoItem key={item.id} item={item} setTodoList={setTodoList} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
