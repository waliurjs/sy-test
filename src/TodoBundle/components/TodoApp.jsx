import { Box, Center } from '@chakra-ui/react';
import { useTodos } from '../hooks';

import AppHeading from './AppHeading';
import InputBox from './InputBox';
import TodoListTable from './TodoListTable';
import TodoRow from './TodoListTable/TodoRow';
import NoTodosMessageRow from './TodoListTable/NoTodosMessageRow';

const TodoApp = () => {
  const [todos, actions] = useTodos();

  return (
    <Center>
      <Box w={700} p={15}>
        <AppHeading />
        <InputBox onFinish={actions.addTodo} placeholder="Write a todo" size="lg" autoFocus />
        <TodoListTable
          rows={todos.map(todo => (
            <TodoRow
              key={todo.id}
              todo={todo}
              toggleTodo={actions.toggleTodo}
              editTodo={actions.editTodo}
              deleteTodo={actions.deleteTodo}
            />
          ))}
          noTodosMessage={<NoTodosMessageRow todos={todos} message="No todos" />}
        />
      </Box>
    </Center>
  );
};

export default TodoApp;
