import * as React from 'react';
import { useState } from 'react';
import TodoList from './TodoList';
import Search from "./Search"
import AddTodoForm from './AddTodoForm';

function App() {

  // const stories = [
  //   {
  //     title: 'React',
  //     url: 'https://reactjs.org/',
  //     author: 'Jordan Walke',
  //     num_comments: 3,
  //     points: 4,
  //     objectID: 0,
  //   },
  //   {
  //     title: 'Redux',
  //     url: 'https://redux.js.org/',
  //     author: 'Dan Abramov, Andrew Clark',
  //     num_comments: 2,
  //     points: 5,
  //     objectID: 1,
  //   },
  // ];

  const [newTodo, setNewTodo] = useState()
  const [todoList, setTodoList] = useState([])


  return (
    <div className="App">
      <h1> Todo List </h1>
      <Search /><br></br>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
