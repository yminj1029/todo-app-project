import React from 'react';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Route component={JoinPage} exact path="/join"></Route>
      <Route component={LoginPage} exact path="/"></Route>
      <Route component={TodoPage} exact path="/todo"></Route>
    </div>
  );
}

export default App;
