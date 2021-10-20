import * as React from 'react';
import TodoList from './TodoList';
import Search from "./Search"
import AddTodoForm from './AddTodoForm';

function App() {
  return (
    <div className="App">
      <h1> Todo List </h1>
      <Search /><br></br>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
