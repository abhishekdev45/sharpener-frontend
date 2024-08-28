import { useState } from 'react';
import TaskList from '../components/TaskList';

export default function CompletedTask() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Sample completed task', completed: true }
  ]);

  const completeTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
      <TaskList
        tasks={tasks.filter(task => task.completed)}
        onComplete={completeTask}
        onDelete={deleteTask}
      />
    </div>
  );
}
