import { useState } from 'react';
import TaskItem from './TaskItem';

export default function TaskList({ tasks, onComplete, onDelete }) {
  return (
    <div className="flex flex-col space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
