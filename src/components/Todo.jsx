import { useRef } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

function Todo({ todo, todos, setTodos, setTodo }) {


  let inputEl = useRef(null);

  function handleSubmit() {
    const timeNow = new Date();
      setTodos([{ id: uuidv4(), title: todo, completed: false, check: false, createdAt: timeNow.getTime() }, ...(todos || [])]);
      setTodo("");
      inputEl.current.focus();
  }
  return (
    <>
      <InputGroup className="mb-5">
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          onKeyPress={event => event.key === "Enter" && handleSubmit()}
          ref={inputEl}
          value={todo}
        />
        <Button
          variant="outline-secondary"
          id="button-addon1"
          className="bg-dark"
          onClick={() => {
            handleSubmit();
          }}
          style={{ color: "white" }}
        >
          Add
        </Button>
      </InputGroup>
    </>
  );
}

export default Todo;
