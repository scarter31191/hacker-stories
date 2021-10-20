import * as React from 'react';
import TodoList from './TodoList';




function Search(){
  return (
    <div>
      <label htmlForm="search">Search: </label>
      <input id='search' type='text' />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1> Todo List </h1>
      <Search />
      <TodoList />
    </div>
  );
}

export default App;
