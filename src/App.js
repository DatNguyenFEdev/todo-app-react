import "./App.css";
import ListTodo from "./components/ListToDo.jsx";
import Todo from "./components/Todo.jsx";
import React, { useState, useEffect} from 'react';


import {Nav, Container} from 'react-bootstrap'
function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  useEffect(() =>{
    localStorage.setItem('todos',JSON.stringify(todos) )
  }, [todos])


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
      <Todo todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} className="bg-dark mb-5"/>
      <ListTodo todos={todos} setTodos={setTodos}/>
      {todos.map((item,index)=> <div key={index}>{item.title}</div>)}
      </Container>
    </div>
  );
}

export default App;
