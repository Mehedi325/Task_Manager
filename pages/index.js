import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Task Manager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
