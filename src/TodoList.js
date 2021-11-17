import React from 'react'
import TodoListItem from './TodoListItem';

const TodoList = (props) => (
  <ul>
    {props.todoList.map((todo) => (
      <TodoListItem key={todo.id} item={todo} />
        ))}
  </ul>
);

export default TodoList
