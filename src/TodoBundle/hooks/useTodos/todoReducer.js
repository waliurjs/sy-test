import { ADD, TOGGLE, EDIT, DELETE } from './actionTypes';
import Todo from './Todo';
import todoSorter from '../../util/todoSorter';

const todoReducer = (state, action) => {
  const payload = action.payload;
  let nextState = [...state];

  switch (action.type) {
    case ADD:
      nextState = [new Todo(payload), ...state];
      break;
    case TOGGLE:
      nextState = state.map(todo => {
        if (todo.id === payload.id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      });
      break;
    case EDIT:
      nextState = state.map(todo => {
        if (todo.id === payload.id) {
          todo.title = payload.newTitle;
        }
        return todo;
      });
      break;
    case DELETE:
      nextState = state.filter(todo => {
        if (todo.id !== payload.id) return todo;
      });
      break;
  }

  nextState.sort(todoSorter);
  console.log('> REDUCER', action, nextState);
  return nextState;
};

export default todoReducer;
