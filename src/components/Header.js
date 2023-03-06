import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, clearCompletedTodo, completeAllTodo } from '../redux/todos/todosActions';

const Header = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoText));
    setTodoText('');
  };

  return (
    <div>
      <form onSubmit={handleAddTodo} className='flex items-center bg-gray-100 px-4 py-4 rounded-md'>
        <img src='./images/notes.png' className='w-6 h-6' alt='Add todo' />
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          type='text'
          placeholder='Type your todo'
          className='w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500'
        />
        <button
          type='submit'
          className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
        ></button>
      </form>

      <ul className='flex justify-between my-4 text-xs text-gray-500'>
        <li onClick={() => dispatch(completeAllTodo())} className='flex space-x-1 cursor-pointer'>
          <img className='w-4 h-4' src='./images/double-tick.png' alt='Complete' />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={() => dispatch(clearCompletedTodo())} className='cursor-pointer'>
          Clear completed
        </li>
      </ul>
    </div>
  );
};
export default Header;
