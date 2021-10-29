import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const TodoSContext = createContext({});

export const TodoSProvider = ({ children }) => {
  const [todoS, setTodoS] = useState(JSON.parse(window.localStorage.getItem('todoS')) || []);
  return (
    <TodoSContext.Provider value={ { todoS, setTodoS } }>
      { children }
    </TodoSContext.Provider>
  );
};

TodoSProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default TodoSContext;
