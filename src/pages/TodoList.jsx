import React, { useEffect, useState } from "react";
import Form from "../component/form/Form";
import Header from "../component/header/Header";
import Layout from "../component/layout/Layout";
import List from "../component/list/List";

const TodoList = (props) => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    console.log({ todo });
  }, [todo]);

  useEffect(() => {
    console.log(todo);
  }, [todo]);
  return (
    <Layout>
      <Header />
      <Form todo={todo} setTodo={setTodo} />
      <List todo={todo} setTodo={setTodo} />
    </Layout>
  );
};

export default TodoList;
