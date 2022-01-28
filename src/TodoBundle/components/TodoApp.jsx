import { Box, Center } from '@chakra-ui/react';
import { useTodos } from '../hooks';

import AppHeading from './AppHeading';
import InputBox from './InputBox';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, actions] = useTodos();

  return (
    <Center>
      <Box width="700px" p={15}>
        <AppHeading />
        <InputBox onFinish={actions.addTodo} placeholder="Write a todo" size="lg" autoFocus />
        <TodoList
          todos={todos}
          toggleTodo={actions.toggleTodo}
          editTodo={actions.editTodo}
          deleteTodo={actions.deleteTodo}
        />
      </Box>
    </Center>
  );
};

export default TodoApp;
