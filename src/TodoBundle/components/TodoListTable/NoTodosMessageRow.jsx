import PropTypes from 'prop-types';
import { Tr, Td, Center } from '@chakra-ui/react';
import { Todo } from '../../entities';

const NoTodosMessageRow = ({ todos, message }) => {
  if (Array.isArray(todos) && todos.length > 0) {
    return null;
  }

  return (
    <Tr>
      <Td colSpan={10}>
        <Center>
          <i>{message}</i>
        </Center>
      </Td>
    </Tr>
  );
};

NoTodosMessageRow.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.instanceOf(Todo)).isRequired,
};
export default NoTodosMessageRow;
