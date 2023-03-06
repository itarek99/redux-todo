import {
  ADD_TODO,
  CLEAR_COMPLETED_TODO,
  COLOR_TODO,
  COMPLETE_ALL_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from './todosActionsType';

const initialState = [];

const todoId = (todos) => {
  const maxID = todos.reduce((maxID, todo) => Math.max(todo.id, maxID), -1);
  return maxID + 1;
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: todoId(state), text: action.payload, completed: false }];

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

    case COLOR_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            color: action.payload.color,
          };
        }
        return todo;
      });

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case COMPLETE_ALL_TODO:
      return state.map((todo) => {
        return { ...todo, completed: true };
      });

    case CLEAR_COMPLETED_TODO:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todosReducer;
