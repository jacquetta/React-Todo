import React from 'react';
import Todo from '../TodoComponents/Todo';


function TodoForm(){
    return (
        <div>
            <h1>Todo App</h1>
            <form>
                <Todo />

                <button>Add todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}

 export default TodoForm;