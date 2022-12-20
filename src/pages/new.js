import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import { useTasks } from '../context/taskContext';
import { useRouter } from 'next/router';

const TaskFormPage = () => {
  const [task, setTask] = useState({ title: '', description: '' });
  const { tasks, createTask, updateTask } = useTasks();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!router.query.id) {
      createTask(task.title, task.description);
    } else {
      updateTask(router.query.id, task.title, task.description);
    }

    router.push('/');
  };

  useEffect(() => {
    if (router.query.id) {
      const taskFound = tasks.find((task) => task.id === router.query.id);
      setTask({ title: taskFound.title, description: taskFound.description });
    }
  }, []);

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <h1>
          {router.query.id ? `Editing task ${router.query.id}` : `Add a task`}
        </h1>
        <input
          type="text"
          name="title"
          placeholder="Write a task"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full px-4 py-3 mb-5"
          value={task.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          rows="2"
          placeholder="Write a description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full px-4 py-3 mb-5"
          value={task.description}
          onChange={handleChange}
        ></textarea>

        <button
          className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded disabled:opacity-40"
          disabled={!task.title || !task.description}
        >
          Save
        </button>
      </form>
    </Layout>
  );
};

export default TaskFormPage;
