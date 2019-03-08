import React from 'react';

function Todo (props) {
    let completed = props.item.completed ? " completed" : "";
    return (
        <div 
            className={`item ${completed}`}
            key={props.item.id}
            onClick={event => {props.toggleItem(props.item.id);
            
            }}
            >
            <p>{props.item.name}</p>
        </div>
    );
}

export default Todo;