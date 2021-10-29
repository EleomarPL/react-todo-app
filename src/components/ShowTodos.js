import { useContext, useEffect, useState } from 'react';

import '../styles/showTodos.css';
import ShowTodosItems from './ShowTodosItems';
import TodoSContext from '../context/TodoS';

const ShowTodos = () => {
  const [filterTodoS, setFilterTodoS] = useState([]);
  const [searcher, setSearcher] = useState('');
  const [totalCompletedTodoS, setTotalCompletedTodoS] = useState(0);
  const {todoS} = useContext(TodoSContext);

  useEffect(() => {
    if (searcher)
      setFilterTodoS(todoS.filter(todo => todo.todo.slice(0, searcher.length) === searcher));
    else
      setFilterTodoS(todoS);
  }, [searcher]);
  useEffect(() => {
    setFilterTodoS(todoS);
    setTotalCompletedTodoS(todoS.filter(todo => todo.isCompleted).length);
  }, [todoS]);

  return (
    <div className="container-show-todos">
      <h2 style={ {fontSize: '2rem', marginBottom: '1rem'} }>Your Tasks</h2>
      <span style={ {marginBottom: '1rem'} }>
        Completed { totalCompletedTodoS } to { todoS.length }
      </span>
      <input
        type="search" placeholder="Search..."
        className="input-search"
        value={ searcher } onChange={ (evt) => setSearcher(evt.target.value) }
      />
      <div style={ {maxHeight: '40vh', overflow: 'auto', marginTop: '1rem', width: '90%'} }>
        { filterTodoS.length > 0
          ? filterTodoS.map( data =>
            <ShowTodosItems key={ data.id }
              dataTodo={ data } setSearcher={ setSearcher }
            />
          )
          : <p>Add a new Task</p>
        }
      </div>
    </div>
  );
};

export default ShowTodos;