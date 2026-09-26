function TodoFilter({ filter, onFilterChange }) {
  return (
    <div className="todo-filter">

      <button
        type="button"
        className={
          filter === "all"
            ? "filter-button active-filter"
            : "filter-button"
        }
        onClick={() => onFilterChange("all")}
      >
        All
      </button>

      <button
        type="button"
        className={
          filter === "active"
            ? "filter-button active-filter"
            : "filter-button"
        }
        onClick={() => onFilterChange("active")}
      >
        Active
      </button>

      <button
        type="button"
        className={
          filter === "completed"
            ? "filter-button active-filter"
            : "filter-button"
        }
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>

    </div>
  );
}

export default TodoFilter;