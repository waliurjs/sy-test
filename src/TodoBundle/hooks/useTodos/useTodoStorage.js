import { useMemo } from 'react';
import LocalStorage from '../../util/LocalStorage';
import { TODO_STORAGE_KEY } from './constants';
import Todo from './Todo';

const storage = new LocalStorage(TODO_STORAGE_KEY, { initialValue: [] });

const useTodoStorage = () => {
  const storageTodos = useMemo(() => {
    return storage.get().map(todo => new Todo(todo));
  }, []);

  const updateStorage = todos => {
    storage.set(todos);
  };

  return [storageTodos, updateStorage];
};

export default useTodoStorage;
