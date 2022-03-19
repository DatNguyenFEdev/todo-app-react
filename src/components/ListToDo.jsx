import React, { useEffect, useRef, useState} from "react";
import { ListGroup, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap";
function ListTodo(props) {
  let inputEl = useRef();
  let [isCompleted, setIsCompleted] = useState(false)
  let Completed = {
    textDecoration: 'line-through'
  }
  let unCompleted = {
    textDecoration: 'none'
  }
  useEffect(() => {
    props.setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);
  function handleDelete(id, e) {
    const newTodos = props.todos.filter((todo) => todo.id !== id);
    props.setTodos(newTodos);
    return localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  function handleUpdate() {
    console.log(inputEl.current);
  }
  function updateStatus(id) {
    let newTodos = props.todos.find(todo=> todo.id ===id)
    console.log(newTodos);
    // props.setTodos([{...newTodos,isCompleted: true}, ...props.todos])
    setIsCompleted(!isCompleted);
  }
  return (
    <>
      <ListGroup>
        {props.todos
          ? props.todos.map((todo) => {
              return (
                <ListGroup.Item key={todo.id}>
                  <Row>
                    <Col lg="9">
                      <InputGroup onDoubleClick={()=> {updateStatus(todo.id)}}>
                        <FormControl ref={inputEl} className={todo.id} 
                        value={todo.title} 
                        style={isCompleted ? unCompleted : Completed} disabled 
                        ></FormControl>
                      </InputGroup>
                    </Col>
                    <Col lg="1">
                      <Button variant="danger" onClick={() => handleDelete(todo.id)}>
                        Delete
                      </Button>
                    </Col>
                    <Col lg="2">
                      <Button variant="warning" onClick={() => handleUpdate()}>
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
