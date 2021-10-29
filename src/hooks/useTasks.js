import { useContext } from 'react';
import TodoSContext from '../context/TodoS';

const useTasks = () => {
  const {todoS, setTodoS} = useContext(TodoSContext);

  const addTask = (task) => {
    const newTodoS = [
      ...todoS,
      {id: todoS.length, todo: task, isCompleted: false}
    ];
    
    setTodoS(newTodoS);
    window.localStorage.setItem('todoS', JSON.stringify(newTodoS));
  };
  return {
    addTask
  };
};

export default useTasks;