import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTask = task.trim();
    if (!trimmedTask) {
      setError("Task cannot be empty.");
      return;
    }
    const validTaskPattern = /^[a-zA-Z0-9\s.,!?'-]+$/;

    if (!validTaskPattern.test(trimmedTask)) {
      setError(
        "Task contains invalid special characters."
      );
      return;
    }
    onAddTodo(trimmedTask);
    setTask("");
    setError("");
  };

  return (
    <form
      className="todo-form-wrapper"
      onSubmit={handleSubmit}
    >
      <div className="todo-form">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="What needs to be done?"
          aria-label="New task"
          className={error ? "input-error" : ""}
        />

        <button type="submit">
          Add Task
        </button>
      </div>

      {error && (
        <p className="validation-error">
          {error}
        </p>
      )}
    </form>
  );
}

export default TodoForm;