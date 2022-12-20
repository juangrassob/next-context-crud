import { createContext, useContext, useState } from 'react';

export const TaskContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, description) => {
    setTasks([...tasks, { id: tasks.length, title, description }]);
  };

  const updateTask = (id, title, description) =>
    setTasks([
      ...tasks.map((task) =>
        task.id === id ? { id, title, description } : task
      ),
    ]);

  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  return useContext(TaskContext);
};
