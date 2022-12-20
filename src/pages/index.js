import { useTasks } from '../context/taskContext';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const Home = () => {
  const { tasks, deleteTask } = useTasks();
  const router = useRouter();

  return (
    <Layout>
      <div className="flex justify-center">
        {tasks.length === 0 ? (
          <h2>No tasks yet!</h2>
        ) : (
          <div className="w-7/12">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex bg-gray-700 hover:bg-gray-600 cursor-pointer px-5 py-5 m-2"
                onClick={() => {
                  router.push(`/edit/${task.id}`);
                }}
              >
                <div>
                  <h1 className="font-bold">{task.title}</h1>
                  <p className="tex-gray-300">{task.description}</p>
                </div>

                <div className="flex-grow text-right">
                  {' '}
                  <button
                    className="bg-red-500 hover:bg-green-400 px-1 py-1 rounded "
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteTask(task.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
