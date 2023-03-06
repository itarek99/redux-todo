import {
  ADD_TODO,
  CLEAR_COMPLETED_TODO,
  COLOR_TODO,
  COMPLETE_ALL_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from './todosActionsType';

export const addTodo = (value) => {
  return { type: ADD_TODO, payload: value };
};

export const toggleTodo = (id) => {
  return { type: TOGGLE_TODO, payload: id };
};

export const colorTodo = (id, color) => {
  return { type: COLOR_TODO, payload: { id, color } };
};

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, payload: id };
};

export const completeAllTodo = () => {
  return { type: COMPLETE_ALL_TODO };
};

export const clearCompletedTodo = () => {
  return { type: CLEAR_COMPLETED_TODO };
};
