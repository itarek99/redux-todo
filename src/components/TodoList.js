import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);

  const filterStatus = (filters, todos) => {
    switch (filters.status) {
      case 'all':
        return todos;
      case 'complete':
        return todos.filter((todo) => todo.completed);
      case 'incomplete':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const filterColors = (filters, todos) => {
    switch (filters.colors) {
      case 'all':
        return todos;
      case 'complete':
        return todos.filter((todo) => todo.completed);
      case 'incomplete':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className='mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto'>
      {filterStatus(filters, todos)
        .filter((todo) => {
          const { colors } = filters;
          if (colors.length > 0) {
            return colors.includes(todo?.color);
          }
          return true;
        })
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
};
export default TodoList;
