import '../styles/globals.css';
import { TasksProvider } from '../context/taskContext';

export default function App({ Component, pageProps }) {
  return (
    <TasksProvider>
      <Component {...pageProps} />
    </TasksProvider>
  );
}
