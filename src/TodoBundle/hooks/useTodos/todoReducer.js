import { ADD, TOGGLE, EDIT, DELETE } from './actionTypes';
import { Todo } from '../../entities';
import todoSorter from '../../util/todoSorter';

const todoReducer = (state, action) => {
  const payload = action.payload;
  let nextState;

  switch (action.type) {
    case ADD:
      nextState = [new Todo(payload), ...state];
      break;
    case TOGGLE:
      nextState = state.map(todo => {
        if (todo.id !== payload.id) return todo;
        return new Todo({ ...todo, isChecked: !todo.isChecked });
      });
      break;
    case EDIT:
      nextState = state.map(todo => {
        if (todo.id !== payload.id) return todo;
        return new Todo({ ...todo, title: payload.newTitle });
      });
      break;
    case DELETE:
      nextState = state.filter(todo => todo.id !== payload.id);
      break;
  }

  if (nextState) {
    return nextState.sort(todoSorter);
  }

  return state;
};

export default todoReducer;
