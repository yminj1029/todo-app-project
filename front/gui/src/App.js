import './App.css';
import TodoTemplate from './components/todo/TodoTemplate';
import CalendarContainer from './containers/CalendarContainer';
import ListContainer from './containers/ListContainer';
function App() {
  return (
    <div className="App">
      <TodoTemplate>
        <CalendarContainer></CalendarContainer>
        <ListContainer></ListContainer>
      </TodoTemplate>
    </div>
  );
}

export default App;
