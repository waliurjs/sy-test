import { useState } from 'react';
import { Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const EditTodoInput = ({ initialValue, onFinish }) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    setValue(event.target.value);
  };

  const onKeyPress = event => {
    if (event.key !== 'Enter') return;
    onFinish(value);
  };

  return <Input value={value} onChange={onChange} onKeyPress={onKeyPress} />;
};

EditTodoInput.propTypes = {
  initialValue: PropTypes.string.isRequired,
};

export default EditTodoInput;
