import { AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTasks } from '../context/taskContext';

const Layout = ({ children }) => {
  const router = useRouter();

  const { tasks } = useTasks();

  return (
    <div className="h-screen bg-gray-900 text-white">
      <header className="flex items-center bg-gray-800 px-28 py-5">
        <Link href="/">
          <h1 className="font-black text-lg">Task App</h1>
        </Link>

        <div className="flex-grow text-right">
          <span className="ml-2 text-gray-400 font-bold px-5">
            {tasks.length} Tasks
          </span>

          <button
            className="bg-green-500 hover:bg-green-400 px-5 py-2 font-bold rounded inline-flex items-center"
            onClick={() => router.push('/new')}
          >
            <AiOutlinePlus className="mr-2" />
            Add Task
          </button>
        </div>
      </header>

      <main className="px-28 py-10">{children}</main>
    </div>
  );
};

export default Layout;
