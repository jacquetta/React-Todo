import React from 'react';

const tasks =[];

class Todo extends React.Component{
    constructor(){
        super();
        this.state = {
            task: tasks
        };
    }

    render(){
        return (
            <div>
                <input 
                    task = 'task'
                    value={this.state.task}
                    placeholder='Task'
                />

            </div>
        );
    }
}

export default Todo;