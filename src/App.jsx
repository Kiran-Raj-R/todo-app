import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };

    setTodos((previousTodos) => [
      ...previousTodos,
      newTodo,
    ]);
  };

  const toggleTodo = (id) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: newText.trim(),
            }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.id !== id)
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  const activeCount = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <div className="app">
      <div className="todo-container">

        <header className="todo-header">
          <h1>My Todo App</h1>
          <p>Manage your tasks easily</p>
        </header>

        <TodoForm onAddTodo={addTodo} />

        <div className="todo-summary">
          <span>
            {activeCount}{" "}
            {activeCount === 1 ? "task" : "tasks"} remaining
          </span>
        </div>

        <TodoFilter
          filter={filter}
          onFilterChange={setFilter}
        />

        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />

      </div>
    </div>
  );
}

export default App;