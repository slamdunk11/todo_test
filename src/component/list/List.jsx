import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

const List = ({ todo, setTodo }) => {
  return (
    <div>
      <div>
        <span>working</span>
        <div className="todo-container">
          {todo
            .filter((item) => !item.isDone)
            .map((item) => {
              return (
                <Todo key={item.id} item={item} setTodo={setTodo} todo={todo} />
              );
            })}
        </div>
      </div>
      <div>
        <span>done</span>
        <div className="todo-container">
          {todo
            .filter((item) => item.isDone)
            .map((item) => {
              return (
                <Todo key={item.id} item={item} setTodo={setTodo} todo={todo} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default List;
