import React from 'react'

const todoList = [
    {
      id:1,
      title: "Complete Assignment"
    },
    {
      id:2,
      title: "Get a tune-up"
    },
    {
      id:3,
      title: "Head to the gym"
    }
  
  ];

function TodoList() {
    return (
        <div>
            <ul>
          {todoList.map(function (obj) {
              return <li key={obj.id}>
                <span>{obj.title}</span>
              </li>
            }
          )}
        </ul>
        </div>
    )
}

export default TodoList
