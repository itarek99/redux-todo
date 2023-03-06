import { useDispatch, useSelector } from 'react-redux';
import { colorChange, statusChange } from '../redux/filters/filtersActions';

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const tasksLeft = todos.filter((todo) => !todo.completed).length;
  const dispatch = useDispatch();

  const taskLeftText = (numberOfTodos) => {
    return numberOfTodos ? `${numberOfTodos} ${numberOfTodos === 1 ? 'task' : 'tasks'} left` : 'No task left';
  };

  const handleStatusChange = (status) => {
    dispatch(statusChange(status));
  };

  const handleColorChange = (color) => {
    filters.colors.includes(color) ? dispatch(colorChange(color, 'removed')) : dispatch(colorChange(color, 'added'));
  };

  return (
    <div className='mt-4 flex justify-between text-xs text-gray-500'>
      <p>{taskLeftText(tasksLeft)}</p>
      <ul className='flex space-x-1 items-center text-xs'>
        <li
          onClick={() => handleStatusChange('all')}
          className={`cursor-pointer ${filters.status === 'all' && 'font-bold'}`}
        >
          All
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange('incomplete')}
          className={`cursor-pointer ${filters.status === 'incomplete' && 'font-bold'}`}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          onClick={() => handleStatusChange('complete')}
          className={`cursor-pointer ${filters.status === 'complete' && 'font-bold'}`}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChange('green')}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filters.colors.includes('green') && 'bg-green-500'
          }`}
        ></li>
        <li
          onClick={() => handleColorChange('red')}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filters.colors.includes('red') && 'bg-red-500'
          }`}
        ></li>
        <li
          onClick={() => handleColorChange('yellow')}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filters.colors.includes('yellow') && 'bg-yellow-500'
          }`}
        ></li>
      </ul>
    </div>
  );
};
export default Footer;
