import PropTypes from 'prop-types';
import { useState } from 'react';

import useTasks from '../hooks/useTasks';

const ShowTodosItems = ({dataTodo, setSearcher}) => {

  const [colorConfirm, setColorConfirm] = useState(dataTodo.isCompleted);
  const {markCompletedTodo, deleteTodo} = useTasks();

  const handleConfirmTask = () => {
    setColorConfirm(!colorConfirm);
    markCompletedTodo(dataTodo);
    setSearcher('');
  };
  const handleDeleteTodo = () => {
    deleteTodo(dataTodo);
  };

  return (
    <div className="todo-items">
      <button type="button" style={ {color: colorConfirm ? 'green' : 'black'} }
        className="button-item" onClick={ handleConfirmTask }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16px"
          height="16px" fill="currentColor"
          className="bi bi-check-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
      </button>
      <div style={ {textAlign: 'center', overflowWrap: 'break-word', margin: '0 10px', maxWidth: '80%'} }>
        { colorConfirm
          ? <del>{ dataTodo.todo }</del>
          : <span>{ dataTodo.todo }</span>
        }
      </div>
      <button type="button" style={ {color: 'red'} }
        className="button-item" onClick={ handleDeleteTodo }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16px"
          height="16px" fill="currentColor"
          className="bi bi-x-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
      </button>
    </div>
  );
};

ShowTodosItems.propTypes = {
  dataTodo: PropTypes.object.isRequired,
  setSearcher: PropTypes.func.isRequired
};

export default ShowTodosItems;