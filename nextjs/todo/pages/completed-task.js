import { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import axios from 'axios';

export default function CompletedTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('/api/todos');
      setTasks(data.filter(task => task.completed));
    };

    fetchTasks();
  }, []);

  const completeTask = async (id) => {
    const updatedTasks = tasks.map(task =>
      task._id === id ? { ...task, completed: !task.completed } : task
    );

    const taskToUpdate = updatedTasks.find(task => task._id === id);
    await axios.put('/api/todos', { id, completed: taskToUpdate.completed });

    setTasks(updatedTasks.filter(task => task.completed));
  };

  const deleteTask = async (id) => {
    await axios.delete('/api/todos', { data: { id } });
    setTasks(tasks.filter(task => task._id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Completed Tasks</h1>
      <TaskList
        tasks={tasks}
        onComplete={completeTask}
        onDelete={deleteTask}
      />
    </div>
  );
}
