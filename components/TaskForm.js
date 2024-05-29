import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTask } from '../store/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ id: Date.now(), title, description }));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="p-2 mb-2 border rounded w-[50%]"
      />
      <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 mb-2 border rounded"
      ></textarea>
      <button type="submit" className="p-2 text-white bg-blue-500 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;
