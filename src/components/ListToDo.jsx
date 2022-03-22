import React, { useEffect, useRef, useState} from "react";
import { ListGroup, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap";
function ListTodo(props) {
  let inputEl = useRef();
  useEffect(() => {
    props.setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);
  function handleDelete(id, e) {
    const newTodos = props.todos.filter((todo) => todo.id !== id);
    props.setTodos(newTodos);
    return localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  function handleUpdate(id) {
    let disibleTodo = props.todos.find((todo) => todo.id === id); 
    disibleTodo.check = !disibleTodo.check;
    let newTodos = props.todos.filter(todo => todo.id !== id);
    // newTodos.map(todo=> {
    //   todo.check = !disibleTodo.check;
    // })
    props.setTodos([disibleTodo,...newTodos]);
  }
  function updateStatus(id) {
    inputEl.current.style.cursor = 'pointer';
    let selectTodo = props.todos.find(todo=> todo.id ===id)
    selectTodo.completed = !selectTodo.completed
    let newTodos = props.todos.filter(todo => todo.id !== id)
    props.setTodos([selectTodo,...newTodos]);
  }
  return (
    <>
      <ListGroup>
        {props.todos
          ? props.todos.map((todo) => {
              return (
                <ListGroup.Item key={todo.id}>
                  <Row>
                    <Col lg='4'>
                      <strong>Double click to completed</strong>
                    </Col>
                    <Col lg="5">
                      <InputGroup onDoubleClick={()=> {updateStatus(todo.id)}}>
                        <FormControl ref={inputEl} className={todo.id} 
                        value={todo.title} 
                        style={{'textDecoration': todo.completed ? 'line-through' : 'none'}} 
                        disabled={todo.check ? '': 'disabled'}
                        ></FormControl>
                      </InputGroup>
                    </Col>
                    <Col lg="1">
                      <Button variant="danger" onClick={() => handleDelete(todo.id)}>
                        Delete
                      </Button>
                    </Col>
                    <Col lg="2">
                      <Button variant="warning" onClick={() => handleUpdate(todo.id)}>
                        Update
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              );
            })
          : ""}
      </ListGroup>
    </>
  );
}

export default ListTodo;
