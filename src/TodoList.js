import React from 'react'
import TodoListItem from './TodoListItem';

const TodoList = (props) => (
  <ul>
    {props.todoList.map((item) => (
      <TodoListItem key={item.objectID} item={item} />
        ))}
  </ul>
);

export default TodoList
