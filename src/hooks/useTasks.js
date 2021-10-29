import { useContext } from 'react';
import TodoSContext from '../context/TodoS';

const useTasks = () => {
  const {todoS, setTodoS} = useContext(TodoSContext);

  const addTask = (task) => {
    const id = todoS.length > 0 ? todoS[todoS.length - 1].id + 1 : 0;
    const newTodoS = [
      ...todoS,
      {id, todo: task, isCompleted: false}
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
  const deleteTodo = (dataTodo) => {
    let newStateTodoS = todoS.filter(todo => dataTodo.id !== todo.id);

    setTodoS(newStateTodoS);
    window.localStorage.setItem('todoS', JSON.stringify(newStateTodoS));
  };
  return {
    addTask, markCompletedTodo, deleteTodo
  };
};

export default useTasks;