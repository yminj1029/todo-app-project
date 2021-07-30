import './App.css';
import TodoTemplate from './components/todo/TodoTemplate';
import TodoList from './components/todo/TodoList';
import TodoInsert from './components/todo/TodoInsert';

function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert></TodoInsert>
        <TodoList></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
