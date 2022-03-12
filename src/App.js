import "./App.css";
import ListTodo from "./components/ListToDo.jsx";
import Todo from "./components/Todo.jsx";
import React, { useState } from 'react';


import {Nav, Container} from 'react-bootstrap'
function App() {
  const [todos, setTodos] = useState([])

  const handleSubmit = (data)=> {
    setTodos([data,...todos])
    localStorage.setItem('todos', JSON.stringify(todos))
    const newTodos = JSON.parse(localStorage.getItem('todos'))
    setTodos(newTodos)
    console.log(todos)
  }
  return (
    <div className="App">
      <Container>
      <Nav activeKey="/home" onSelect={(selectedKey) => alert("Comming soon")} className="bg-dark mb-5">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Settings
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <h1>TodoApp</h1>
      <Todo onAdd={handleSubmit}/>
      <ListTodo list={todos} />
      </Container>
    </div>
  );
}

export default App;
