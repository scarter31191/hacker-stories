import React from 'react'
import { useState } from 'react'

function AddTodoForm(props) {
    const [todoTitle, settodoTitle] = useState('')

    // const initialState = {
    //     title: "",
    //     id: ""
    // }

    const todoObject = {
        title: todoTitle,
        id: Date.now()
    }

    function handleTitleChange(e) {
        const newTodoTitle = e.target.value
        settodoTitle(newTodoTitle)
    }

    function handleAddTodo(e) {
        e.preventDefault()
        // const todoEl = document.getElementById('todoTitle');
        // const todoTitle = todoEl.value;
        props.onAddTodo(todoObject)
        settodoTitle('')
    }


    return (
        <div>
            <form onSubmit={handleAddTodo} >
                <label htmlFor="todoTitle">Title: </label>
                <input id="todoTitle" value={todoTitle} onChange={handleTitleChange} name="title" placeholder="Add Todo..." ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddTodoForm


// inside the handleAddTodo function, invoke the onAddTodo 
// callback prop and pass newTodo as an argument