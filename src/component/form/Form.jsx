import React, { useEffect, useState } from "react";
import "./style.css";

const Form = ({ todo, setTodo }) => {
  const [content, setContent] = useState({
    title: "",
    body: "",
  });
  const { title, body } = content;
  const onChange = (e) => {
    const { name, value } = e.target;
    setContent({ ...content, [name]: value });
  };

  const onSubmitHandler = () => {
    if (title !== "" && body !== "") {
      setTodo([
        ...todo,
        { id: todo.length, title: title, body: body, isDone: false },
      ]);
      setContent({ title: "", body: "" });
    }
  };

  useEffect(() => {
    console.log({ title });
    console.log({ body });
  }, [title, body]);

  // const [title, setTitle] = useState("");
  // const handleInput = (event) => {
  //   console.log({ event });
  //   setTitle(event.target.value);
  // };
  return (
    <div className="form-container">
      <div className="form-box">
        <div>
          <span className="form-title">제목</span>
          <input
            onChange={onChange}
            name="title"
            value={title}
            className="input-style"
          />
        </div>
        <div>
          <span className="form-title">내용</span>
          <input
            onChange={onChange}
            name="body"
            value={body}
            className="input-style"
          />
        </div>
      </div>
      <button className="button-style" onClick={onSubmitHandler}>
        추가하기
      </button>
    </div>
  );
};

export default Form;
