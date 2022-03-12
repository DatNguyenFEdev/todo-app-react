import React from "react";
import { ListGroup } from "react-bootstrap";
function ListTodo(props) {
  const itemTodo = props.list.map((item) => <ListGroup.Item as="li">{item}</ListGroup.Item>)
  return (
    <>
      {/* <ul>{itemTodo}</ul> */}
      <ListGroup as="ul">
        {itemTodo}
      </ListGroup>
    </>
  );
}

export default ListTodo;
