import React, { useEffect, useRef, useState } from "react";
import { ListGroup, Button, Row, Col, InputGroup, FormControl, Modal } from "react-bootstrap";
import moment from "moment";

function ListTodo(props) {
  let inputEl = useRef();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    props.setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  function handleDelete(id, e) {
    setShow(false);
    const newTodos = props.todos.filter((todo) => todo.id !== id);
    props.setTodos(newTodos);
    return localStorage.setItem("todos", JSON.stringify(newTodos));
  }
  function handleUpdate(id) {
    let disibleTodo = props.todos.find((todo) => todo.id === id);
    disibleTodo.check = !disibleTodo.check;
    let newTodos = props.todos.filter((todo) => todo.id !== id);
    props.setTodos([disibleTodo, ...newTodos]);
  }
  function updateStatus(id) {
    let newArray = [];
    props.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      newArray.push(todo);
    });
    props.setTodos(newArray);
  }

  const changeInputData = (id, e) => {
    let newArray = [];
    props.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = e.target.value;
      }
      newArray.push(todo);
    });
    props.setTodos(newArray);
  };

  return (
    <>
      <ListGroup>
        {props.todos
          ? props.todos.map((todo) => {
              return (
                <ListGroup.Item key={todo.id}>
                  <Row>
                    <Col lg="3">
                      <strong>Double click to completed</strong>
                    </Col>
                    <Col lg="5">
                      <InputGroup
                        onDoubleClick={() => {
                          updateStatus(todo.id);
                        }}
                      >
                        <FormControl
                          ref={inputEl}
                          onChange={(e) => changeInputData(todo.id, e)}
                          className={todo.id}
                          value={todo.title}
                          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                          disabled={todo.check ? "" : "disabled"}
                        ></FormControl>
                      </InputGroup>
                    </Col>
                    <Col lg="2">
                      <strong>{moment(todo.createdAt).fromNow()}</strong>
                    </Col>
                    <Col lg="1">
                      <Button
                        variant="danger"
                        onClick={handleShow}
                      >
                        Delete
                      </Button>
                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Are you sure delete todo this?</Modal.Title>
                        </Modal.Header>

                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={(e) => handleDelete(todo.id)}>I'm sure</Button>
                        </Modal.Footer>
                      </Modal>
                    </Col>
                    <Col lg="1">
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
