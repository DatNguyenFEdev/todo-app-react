import { Button, InputGroup, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

function Todo({todo, todos, setTodos, setTodo}) {
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, {id: uuidv4(),title: todo}])
    setTodo('')
  }
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl aria-label="Example text with button addon" aria-describedby="basic-addon1" 
        onChange={(e)=> {setTodo(e.target.value)}} value={todo}
        />
        <Button variant="outline-secondary" id="button-addon1" onClick={handleSubmit}>
          Add
        </Button>
      </InputGroup>
    </>
  );
}

export default Todo;
