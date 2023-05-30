import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ]);
  const [todoInput, setTodoInput] = useState("");
  //   const [todo, setTodo] = useState("");
  console.log(todoInput);

  const addTodo = (event) => {
    setTodos([
      {
        id: Date.now(),
        text: todoInput,
        completed: false,
      },
      ...todos,
    ]);
    setTodoInput("");
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
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
            <p> {todo.text}</p>
            <button onClick={deleteTodo}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={deleteTodoAllTodo}>Delete all todo</button>
    </div>
  );
};

export default Todo;
