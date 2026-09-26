import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!task.trim()) {
      return;
    }

    onAddTodo(task);
    setTask("");
  };

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={task}
        onChange={(event) =>
          setTask(event.target.value)
        }
        placeholder="What needs to be done?"
        aria-label="New task"
      />

      <button type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;