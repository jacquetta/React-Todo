import React from 'react';

function Todo (props) {

    return (
        <div 
            className={props.item.completed}
            key={props.item.id}
            onClick={event => {props.toggleItem(props.item.id);
            
            }}
            >
            <p>{props.item.todo}</p>
        </div>
    );
}

export default Todo;