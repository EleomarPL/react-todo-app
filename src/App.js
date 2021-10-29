import AddedTodo from './components/AddedTodo';
import Container from './components/Container';
import ShowTodos from './components/ShowTodos';
import { TodoSProvider } from './context/TodoS';
import './styles/index.css';

const App = () => {
  return (
    <TodoSProvider>
      <main>
        <Container>
          <AddedTodo />
          <ShowTodos />
        </Container>
      </main>
    </TodoSProvider>
  );
};

export default App;