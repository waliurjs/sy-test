import { useReducer, useEffect } from 'react';
import { ADD, TOGGLE, EDIT, DELETE } from './actionTypes';
import todoReducer from './todoReducer';
import useTodoStorage from './useTodoStorage';

const useTodos = () => {
  const [storageTodos, updateStorage] = useTodoStorage();
  const [todos, dispatch] = useReducer(todoReducer, storageTodos);

  useEffect(() => updateStorage(todos), [todos]);

  const todoDispatch = (type, payload) => {
    dispatch({ type, payload });
  };

  const addTodo = title => {
    todoDispatch(ADD, { title });
  };

  const toggleTodo = id => {
    todoDispatch(TOGGLE, { id });
  };

  const editTodo = (id, newTitle) => {
    todoDispatch(EDIT, { id, newTitle });
  };

  const deleteTodo = id => {
    todoDispatch(DELETE, { id });
  };

  const actions = {
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
  };

  return [todos, actions];
};

export default useTodos;
