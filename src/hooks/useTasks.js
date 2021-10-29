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
  const markCompletedTodo = (dataTodo) => {
    let newStateTodoS = todoS.map(todo => {
      if (todo.id === dataTodo.id) {
        return {
          ...todo, isCompleted: !dataTodo.isCompleted
        };
      } else return todo;
    });
    setTodoS(newStateTodoS);

    window.localStorage.setItem('todoS', JSON.stringify(newStateTodoS));
  };
  return {
    addTask, markCompletedTodo
  };
};

export default useTasks;