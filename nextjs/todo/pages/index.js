import { useState } from 'react';
import Link from 'next/link';
import TaskList from '../components/TaskList';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() === '') return;

    setTasks([
      ...tasks,
      { id: Date.now(), text: taskText, completed: false },
    ]);
    setTaskText('');
  };

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
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="flex-grow border border-gray-300 p-2 mr-2"
        />
        <button onClick={addTask} className="bg-blue-500 text-white p-2">
          Add Task
        </button>
      </div>
      <TaskList
        tasks={tasks.filter(task => !task.completed)}
        onComplete={completeTask}
        onDelete={deleteTask}
      />
      <div className="mt-4">
        <Link href="/completed-task" className="text-blue-500 hover:underline">
          View Completed Tasks
        </Link>
      </div>
    </div>
  );
}
