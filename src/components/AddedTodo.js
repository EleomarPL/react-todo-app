import '../styles/addedTodo.css';

const AddedTodo = () => {
  return (
    <div className="container-added-todo">
      <h1>Create New Task</h1>
      <label htmlFor="task-name" style={ {fontSize: '1.5rem'} }>Task Name</label>
      <input
        type="text" id="task-name"
        placeholder="write the task"
      />
      <button type="button"
        className="button-add-task"
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