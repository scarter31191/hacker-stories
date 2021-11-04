import React from 'react'

function AddTodoForm(props) {
    function handleAddTodo(e) {
        e.preventDefault()
        const todoEl = document.getElementById('todoTitle');
        const todoTitle = todoEl.value;
        props.onAddTodo(todoTitle)
        // e.target.reset()
    }


    return (
        <div>
            <form onSubmit={handleAddTodo} >
                <label htmlFor="todoTitle">Title: </label>
                <input id="todoTitle" name="title" placeholder="Add Todo..." onChange={handleAddTodo}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddTodoForm


// inside the handleAddTodo function, invoke the onAddTodo 
// callback prop and pass newTodo as an argument