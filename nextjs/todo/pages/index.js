import { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import axios from 'axios';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('/api/todos');
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const addTask = async () => {
    if (taskText.trim() === '') return;

    const newTask = { text: taskText, completed: false };
    const { data } = await axios.post('/api/todos', newTask);
    setTasks([...tasks, data]);
    setTaskText('');
  };

  const completeTask = async (id) => {
    const updatedTasks = tasks.map(task =>
      task._id === id ? { ...task, completed: !task.completed } : task
    );

    const taskToUpdate = updatedTasks.find(task => task._id === id);
    await axios.put('/api/todos', { id, completed: taskToUpdate.completed });

    setTasks(updatedTasks);
  };

  const deleteTask = async (id) => {
    await axios.delete('/api/todos', { data: { id } });
    setTasks(tasks.filter(task => task._id !== id));
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
        <a href="/completed-task" className="text-blue-500 hover:underline">View Completed Tasks</a>
      </div>
    </div>
  );
}
