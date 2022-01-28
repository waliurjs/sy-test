import formatDate from '../../util/formatDate';
class Todo {
  constructor(todo) {
    const time = new Date();

    this.id = todo.id || time.getTime();
    this.title = todo.title;
    this.createdAt = todo.createdAt ? new Date(todo.createdAt) : time;
    this.isChecked = todo.isChecked || false;
  }

  get formatedCreatedAt() {
    return formatDate(this.createdAt);
  }
}

export default Todo;
