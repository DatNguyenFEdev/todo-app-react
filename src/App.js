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
  }, [todos]);
  const styleApp = {
    height: 'auto',
    paddingBottom: '30px'
  }


  return (
    <div className="App mb-5" style={styleApp}>
      <Container>
      <Nav activeKey="/home" onSelect={(selectedKey) => alert("Comming soon")} className=" mb-5">
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
      <h1 style={{color: 'white'}} className="text-center mb-3">Todos List Myself</h1>
      <Todo todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} className="bg-dark"/>
      <ListTodo todos={todos} setTodos={setTodos}/>
      </Container>
    </div>
  );
}

export default App;
