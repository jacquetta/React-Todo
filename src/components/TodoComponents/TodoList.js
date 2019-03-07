import React from 'react';
import Todo from './Todo';


function TodoList (props){
    return (
        <div className='todo-list'>
            {props.todos.map(item => {
                return <Todo todo={item}  toggleItem={props.toggleItem} />;
            })}
        </div>
    );
}

export default TodoList;