import React from "react";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([{ id: 0, text: "Test" }]);
  const [todoInput, setTodoInput] = useState("");
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  const saveTodo = (id) => {
    const newTodo = todos.map((item) =>
      item.id === id ? { ...item, text: value } : item
    );

    setTodos(newTodo);

    setEdit(null);

    // const newTodo = [...todos].map((todo) => {
    //   if (todo.id === id) {
    //     todo.text === value;
    //   }
    //   return todo;
    // });

    // setTodos(newTodo);
    // setEdit(null);
  };

  const editTodo = (id, text) => {
    setEdit(id);
    setValue(text);
  };

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
      <div>
        <input
          value={todoInput}
          placeholder="Enter text"
          onChange={(event) => setTodoInput(event.target.value)}
        />
        <button onClick={addTodo}>Add todo</button>
      </div>

      <h1>Todo list</h1>
      <div className="countTodo">
        <p className="countTodoItem">All todo: {todos.length}</p>
      </div>
      <div>
        {todos.map((todo, id) => (
          <div key={id} className="todoList">
            {edit === todo.id ? (
              <div>
                <input
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
              </div>
            ) : (
              <div> {todo.text}</div>
            )}
            {edit === todo.id ? (
              <div>
                <button onClick={() => saveTodo(todo.id, todo.text)}>
                  Save
                </button>
              </div>
            ) : (
              <div>
                <button onClick={() => statusTodo(todo.id)}>
                  {(todo.status = !todo.status) ? (
                    <div className="buttonYes">Good!</div>
                  ) : (
                    <div className="buttonNo">Completed?</div>
                  )}
                </button>
                <button onClick={() => editTodo(todo.id, todo.text)}>
                  Edit
                </button>

                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={deleteTodoAllTodo}>Delete all todo</button>
    </div>
  );
};

export default Todo;
