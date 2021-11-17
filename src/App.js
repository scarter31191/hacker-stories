import * as React from 'react';
import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import Search from "./Search"
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {

  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("savedTodoList")) || [])

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList))
  })

  return [todoList, setTodoList]
}


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

  // const [newTodo, setNewTodo] = useState()
  const [todoList, setTodoList] = useSemiPersistentState()
  
  

  // const savedTodoList = localStorage.getItem("saveTodoList")
  function addTodo(newTodo) {
    setTodoList(todoList => [...todoList, newTodo ])
  }

  return (
    <div className="App">
      <h1> Todo List </h1>
      <Search /><br></br>
      <AddTodoForm onAddTodo={addTodo}/>
      {/* <p>{newTodo}</p> */}
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
