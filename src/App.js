import Container from './components/Container';
import { TodoSProvider } from './context/TodoS';
import './styles/index.css';

const App = () => {
  return (
    <TodoSProvider>
      <main>
        <Container>
        </Container>
      </main>
    </TodoSProvider>
  );
};

export default App;