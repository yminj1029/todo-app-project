import React from 'react';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Route component={JoinPage} path="/join"></Route>
      <Route component={LoginPage} path="/login"></Route>
      <Route component={TodoPage} path="/todo"></Route>
    </div>
  );
}

export default App;
