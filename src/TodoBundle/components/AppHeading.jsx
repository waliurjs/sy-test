import { memo } from 'react';
import { Center, Heading } from '@chakra-ui/react';

const AppHeading = () => {
  return (
    <Center>
      <Heading mt={5} mb={4}>
        Todo App
      </Heading>
    </Center>
  );
};

export default memo(AppHeading);
