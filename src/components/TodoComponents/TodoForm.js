import React from 'react';
 
import './Todo.css';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
         <div className='form'>
            <form onSubmit={this.props.addToDo}>
                <input
                    type="text"
                    placeholder="Add Todo"
                    value={this.props.item}
                    name="item"
                    onChange={this.props.inputTask}
                />
                <button type="submit">Add Todo</button>
                <button onClick={this.props.clearCompleted}>
                    Clear Completed
                 </button>
                </form>
         </div>
        );
    }
}
 

 export default TodoForm;

