import { useState } from 'react';
import { InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import { AiOutlineEnter } from 'react-icons/ai';
import PropTypes from 'prop-types';

const InputBox = ({ initialValue, onFinish, placeholder, size, autoFocus }) => {
  const [title, setTitle] = useState(initialValue);
  const onChange = event => setTitle(event.target.value);
  const resetInput = () => setTitle('');

  const onKeyPress = event => {
    if (event.key !== 'Enter') return;
    if (!title.length) return;

    onFinish(title);
    resetInput();
  };

  return (
    <InputGroup>
      <Input
        value={title}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        size={size}
        autoFocus={autoFocus}
      />
      <InputRightElement>
        <AiOutlineEnter style={{ marginTop: 6 }} />
      </InputRightElement>
    </InputGroup>
  );
};

InputBox.propTypes = {
  onFinish: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  autoFocus: PropTypes.bool,
};

InputBox.defaultProps = {
  initialValue: '',
};

export default InputBox;
