import React from 'react'
import TodoListItem from './TodoListItem';

const TodoList = (props) => (
  <ul>
    {props.list.map((item) => (
      <TodoListItem key={item.objectID} item={item} />
        ))}
  </ul>
);

export default TodoList
