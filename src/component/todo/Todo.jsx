import React from "react";
import "./style.css";

const Todo = ({ item, setTodo, todo }) => {
  const onChangeHandler = (type) => {
    if (type === "delete") {
      setTodo(todo.filter((t) => t.id !== item.id));
    } else {
      setTodo(
        todo.map((t) => {
          if (t.id === item.id) {
            return { ...t, isDone: !t.isDone };
          } else {
            return t;
          }
        })
      );
    }
  };
  return (
    <div className="todo-item">
      <div>{item.title}</div>
      <div>{item.body}</div>
      <div>
        <button
          onClick={() => {
            onChangeHandler("delete");
          }}
        >
          삭제하기
        </button>
        <button
          onClick={() => {
            onChangeHandler("");
          }}
        >
          {item.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
