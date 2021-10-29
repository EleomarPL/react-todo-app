import { useState } from 'react';
import useTasks from '../hooks/useTasks';

import '../styles/addedTodo.css';

const AddedTodo = () => {
  const [task, setTask] = useState('');
  const {addTask} = useTasks();

  const handleCreateTask = () => {
    addTask(task);
    setTask('');
  };

  return (
    <div className="container-added-todo">
      <h1>Create New Task</h1>
      <label htmlFor="task-name" style={ {fontSize: '1.5rem'} }>Task Name</label>
      <input
        type="text" id="task-name"
        placeholder="write the task"
        value={ task } onChange={ (evt) => setTask(evt.target.value) }
      />
      <button type="button"
        className="button-add-task"
        onClick={ handleCreateTask }
      >
        Create Task
      </button>
      <picture>
        <source srcSet={ require('../img/added.webp').default } />
        <img src={ require('../img/added.png').default }
          className="img-added"
        />
      </picture>
    </div>
  );
};

export default AddedTodo;