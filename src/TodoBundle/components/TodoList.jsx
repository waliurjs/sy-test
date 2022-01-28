import { useState } from 'react';
import { Table, Tbody, Tr, Td, Checkbox, IconButton, HStack, Center, Text } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import InputBox from './InputBox';
import Todo from '../hooks/useTodos/Todo';

const TodoList = ({ todos, toggleTodo, editTodo, deleteTodo }) => {
  const [editId, setEditId] = useState(null);
  const toggle = id => () => toggleTodo(id);

  const toggleEditMode = id => () => setEditId(editId === id ? null : id);
  const onEditFinish = id => newTitle => {
    editTodo(id, newTitle);
    setEditId(null);
  };

  const onTodoDelete = id => () => deleteTodo(id);

  const noTodos = Array.isArray(todos) && todos.length === 0;

  return (
    <Table variant="simple">
      <Tbody>
        {noTodos && (
          <Tr>
            <Td>
              <Center>
                <i>No Todos</i>
              </Center>
            </Td>
          </Tr>
        )}
        {todos.map(todo => (
          <Tr key={todo.id}>
            <Td width={30} pr={0}>
              <Checkbox isChecked={todo.isChecked} onChange={toggle(todo.id)} size="lg" />
            </Td>
            <Td>
              {editId === todo.id ? (
                <InputBox
                  initialValue={todo.title}
                  onFinish={onEditFinish(todo.id)}
                  placeholder="Edit Todo"
                  autoFocus
                />
              ) : (
                <Text whiteSpace="nowrap">{todo.title}</Text>
              )}
            </Td>
            <Td w={150}>
              <Text whiteSpace="nowrap">{todo.formatedCreatedAt}</Text>
            </Td>
            <Td w={120}>
              <HStack justify="flex-end">
                <IconButton onClick={toggleEditMode(todo.id)} icon={<EditIcon />} variant="ghost" />
                <IconButton onClick={onTodoDelete(todo.id)} icon={<DeleteIcon />} variant="ghost" />
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.instanceOf(Todo)).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
