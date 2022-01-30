import { useReducer, useEffect, useCallback, useMemo } from 'react';
import { ADD, TOGGLE, EDIT, DELETE } from './actionTypes';
import todoReducer from './todoReducer';
import useTodoStorage from './useTodoStorage';

const useTodos = () => {
  const [storageTodos, updateStorage] = useTodoStorage();
  const [todos, dispatch] = useReducer(todoReducer, storageTodos);

  useEffect(() => updateStorage(todos), [todos]);

  const todoDispatch = useCallback(
    (type, payload) => {
      dispatch({ type, payload });
    },
    [dispatch]
  );

  const addTodo = useCallback(
    title => {
      todoDispatch(ADD, { title });
    },
    [todoDispatch]
  );

  const toggleTodo = useCallback(
    id => {
      todoDispatch(TOGGLE, { id });
    },
    [todoDispatch]
  );

  const editTodo = useCallback(
    (id, newTitle) => {
      todoDispatch(EDIT, { id, newTitle });
    },
    [todoDispatch]
  );

  const deleteTodo = useCallback(
    id => {
      todoDispatch(DELETE, { id });
    },
    [todoDispatch]
  );

  const actions = useMemo(
    () => ({
      addTodo,
      toggleTodo,
      editTodo,
      deleteTodo,
    }),
    [addTodo, toggleTodo, editTodo, deleteTodo]
  );

  return [todos, actions];
};

export default useTodos;
