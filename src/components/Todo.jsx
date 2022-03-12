import { Button, InputGroup, FormControl } from "react-bootstrap";
import React, { useState } from 'react';

function Todo(props) {
    const [todo, setTodo] = useState('')
    function handleSubmit() {
        props.onAdd(todo);
        setTodo('')
    }
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl aria-label="Example text with button addon" aria-describedby="basic-addon1" onChange={e=> {setTodo(e.target.value)}} value={todo}/>
        <Button variant="outline-secondary" id="button-addon1" onClick={handleSubmit}>
          Add
        </Button>
      </InputGroup>
    </>
  );
}

export default Todo;
