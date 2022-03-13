import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
function ListTodo(props) {
  useEffect(() => {
    props.setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);
  let itemGroup = props.todos
    ? props.todos.map((todo, index) => {
        <li key={todo.id}>{todo.title} <span>close</span></li>;
      })
    : "";
  return (
    <>
      <ul>{itemGroup}</ul>
    </>
  );
}

export default ListTodo;
