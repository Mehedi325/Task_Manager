import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../store/taskSlice';
import { useState } from 'react';
import Pagination from './Pagination';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;
  const [editingTask, setEditingTask] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEdit = (task) => {
    setEditingTask(task.id);
    setTitle(task.title);
    setDescription(task.description);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editTask({ id: editingTask, title, description }));
    setEditingTask(null);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      {currentTasks.map(task => (
        <div key={task.id} className="border p-4 mb-2 rounded">
          {editingTask === task.id ? (
            <form onSubmit={handleUpdate}>
              <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border p-2 rounded mb-2 w-full"
              />
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="border p-2 rounded mb-2 w-full"
              ></textarea>
              <button type="submit" className="bg-green-500 text-white p-2 rounded">Update Task</button>
            </form>
          ) : (
            <>
              <h3 className="text-xl">{task.title}</h3>
              <p>{task.description}</p>
              <button 
                onClick={() => handleEdit(task)}
                className="bg-yellow-500 text-white p-2 rounded mt-2 mr-2"
              >
                Edit
              </button>
              <button 
                onClick={() => dispatch(deleteTask(task.id))}
                className="bg-red-500 text-white p-2 rounded mt-2"
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
      <Pagination tasksPerPage={tasksPerPage} totalTasks={tasks.length} paginate={paginate} />
    </div>
  );
};

export default TaskList;
