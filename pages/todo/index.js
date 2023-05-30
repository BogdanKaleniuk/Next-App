import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 0, text: "Learn HTML and CSS" },
    { id: 1, text: "Get good at JavaScript" },
    { id: 2, text: "Master React" },
    { id: 3, text: "Discover Redux" },
    { id: 4, text: "Build amazing apps" },
  ]);
  const [todoInput, setTodoInput] = useState("");
  //   const [todo, setTodo] = useState("");
  console.log(todoInput);

  const addTodo = (event) => {
    setTodos([
      {
        id: Date.now(),
        text: todoInput,
        // completed: false,
      },
      ...todos,
    ]);
    setTodoInput("");
  };
  console.log(todos);

  const deleteTodo = (id) => {
    console.log(todos);
    const newTodo = [...todos].filter((item) => {
      return item.id !== id;
    });
    console.log(newTodo);
    setTodos(newTodo);
  };

  const deleteTodoAllTodo = (id) => {
    const newTodo = [...todos].filter((todo) => todo.id == id);
    setTodos(newTodo);
  };

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      <input
        value={todoInput}
        placeholder="Enter text"
        type="text"
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <p>Todo list</p>
      <div>
        {todos.map((todo, id) => (
          <div key={id}>
            <p>
              {todo.text}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </p>
          </div>
        ))}
      </div>
      <button onClick={deleteTodoAllTodo}>Delete all todo</button>
    </div>
  );
};

export default Todo;
