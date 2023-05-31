import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([{ id: 0, text: "Test" }]);
  const [todoInput, setTodoInput] = useState("");
  const [edit, setEdit] = useState(0);

  const editTodo = (id) => {};

  const addTodo = (event) => {
    if (todoInput !== "") {
      setTodos([
        {
          id: Date.now(),
          text: todoInput,
        },
        ...todos,
      ]);
      setTodoInput("");
    } else alert("Пустий рядок");
    return;
  };

  const deleteTodo = (id) => {
    console.log(todos);
    const newTodo = [...todos].filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodo);
  };

  const deleteTodoAllTodo = (id) => {
    const newTodo = [...todos].filter((todo) => todo.id == id);
    setTodos(newTodo);
  };

  const statusTodo = (id) => {
    const newTodo = [...todos].filter((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }

      return todo;
    });
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
      <h1>Todo list</h1>
      <div className="countTodo">
        <p className="countTodoItem">All todo: {todos.length}</p>
        <p className="countTodoItem">Active: {todos.length.status}</p>
        <p className="countTodoItem">Completed: 2</p>
      </div>
      <div>
        {todos.map((todo, id) => (
          <div key={id}>
            <p>
              {todo.text}
              <button onClick={() => statusTodo(todo.id)}>
                {(todo.status = !todo.status) ? (
                  <div className="buttonYes">Good!</div>
                ) : (
                  <div className="buttonNo">Completed?</div>
                )}
              </button>
              <button onClick={() => editTodo(todo.id)}>Edit</button>
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
