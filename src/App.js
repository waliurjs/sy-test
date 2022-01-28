import { ChakraProvider } from '@chakra-ui/react';
import { TodoApp } from './TodoBundle';

function App() {
  return (
    <ChakraProvider>
      <TodoApp />
    </ChakraProvider>
  );
}

export default App;
