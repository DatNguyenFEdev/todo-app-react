import {useRef} from "react"
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

function Todo({todo, todos, setTodos, setTodo}) {
  let inputEl = useRef(null)
  function handleSubmit(e) {
    setTodos([{id: uuidv4(),title: todo, isCompleted: false},...todos])
    setTodo('')
  }
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl aria-label="Example text with button addon" aria-describedby="basic-addon1" 
        onChange={(e)=> {setTodo(e.target.value)}} value={todo}
        onKeyDown={() => handleSubmit}
        ref={inputEl}
        />
        <Button variant="outline-secondary" id="button-addon1" onClick={handleSubmit} style={{color: 'white'}}>
          Add
        </Button>
      </InputGroup>
    </>
  );
}

export default Todo;
