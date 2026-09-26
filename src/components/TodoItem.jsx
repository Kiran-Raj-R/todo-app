import { useEffect, useState } from "react";

function TodoItem({todo, onToggle, onDelete, onEdit,}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  useEffect(() => {
    setEditText(todo.text);
  }, [todo.text]);

  const handleSave = () => {
    if (!editText.trim()) {
      return;
    }

    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSave();
    }

    if (event.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <div
      className={`todo-item ${
        todo.completed ? "todo-completed" : ""
      }`}
    >
      <div className="todo-content">

        <input
          className="todo-checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        {isEditing ? (
          <input
            className="edit-input"
            type="text"
            value={editText}
            onChange={(event) =>
              setEditText(event.target.value)
            }
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span
            className={
              todo.completed
                ? "todo-text completed"
                : "todo-text"
            }
          >
            {todo.text}
          </span>
        )}

      </div>

      <div className="todo-actions">

        {isEditing ? (
          <>
            <button
              type="button"
              className="save-button"
              onClick={handleSave}
            >
              Save
            </button>

            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="edit-button"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>

            <button
              type="button"
              className="delete-button"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default TodoItem;