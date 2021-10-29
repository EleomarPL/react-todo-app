import { useState } from 'react';
import '../styles/showTodos.css';
import ShowTodosItems from './ShowTodosItems';

const ShowTodos = () => {

  const [filterTodoS, setFilterTodoS] = useState([
    { id: 1, todo: 'Create apps', isCompleted: false}
  ]);

  return (
    <div className="container-show-todos">
      <h2 style={ {fontSize: '2rem', marginBottom: '1rem'} }>Your Tasks</h2>
      <span style={ {marginBottom: '1rem'} }>Completed 1 to 6</span>
      <input
        type="search" placeholder="Search..."
        className="input-search"
      />
      <div style={ {maxHeight: '40vh', overflow: 'auto', marginTop: '1rem', width: '90%'} }>
        { filterTodoS.length > 0
          ? filterTodoS.map((data, index) =>
            <ShowTodosItems key={ index }
              dataTodo={ data } setFilterTodoS={ setFilterTodoS }
            />
          )
          : <p>Add a new Task</p>
        }
      </div>
    </div>
  );
};

export default ShowTodos;