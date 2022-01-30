import { useState, memo } from 'react';
import { Tr, Td, Checkbox, IconButton, HStack, Text } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import PropTypes from 'prop-types';

import InputBox from '../InputBox';
import { Todo } from '../../entities';

const TodoRow = ({ todo, toggleTodo, editTodo, deleteTodo }) => {
  const [editId, setEditId] = useState(null);
  const toggle = id => () => toggleTodo(id);

  const toggleEditMode = id => () => setEditId(editId === id ? null : id);
  const onEditFinish = id => newTitle => {
    editTodo(id, newTitle);
    setEditId(null);
  };

  const onTodoDelete = id => () => deleteTodo(id);

  return (
    <Tr>
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
  );
};

TodoRow.propTypes = {
  todo: PropTypes.instanceOf(Todo).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const isSameTodo = (prev, next) => prev.todo === next.todo;

export default memo(TodoRow, isSameTodo);
