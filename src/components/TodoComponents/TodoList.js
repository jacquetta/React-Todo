import React from 'react';
import Todo from './Todo';


function TodoList (props){
    return (
        <div className='todo-list'>
            {props.todos.map(taskItem => {
                return <Todo item={taskItem}  toggleItem={props.toggleItem} />;
            })}
        </div>
    );
}

export default TodoList;