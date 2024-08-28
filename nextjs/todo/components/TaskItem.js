export default function TaskItem({ task, onComplete, onDelete }) {
    return (
      <div className="flex items-center justify-between p-2 border-b border-gray-300">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onComplete(task.id)}
            className="mr-2"
          />
          <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    );
  }
  