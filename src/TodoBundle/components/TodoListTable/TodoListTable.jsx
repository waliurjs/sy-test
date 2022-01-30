import { Table, Tbody } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const TodoListTable = ({ noTodosMessage, rows }) => (
  <Table variant="simple">
    <Tbody>
      {noTodosMessage}
      {rows}
    </Tbody>
  </Table>
);

TodoListTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.element).isRequired,
  noTodosMessage: PropTypes.node.isRequired,
};

export default TodoListTable;
