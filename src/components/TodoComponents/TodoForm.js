import React from 'react';
 
class TodoForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
     return (
        <form onSubmit={this.props.addToDo}>
            <input
                type='text'
                placeholder='Todo'
                value={this.props.todo}
                name='todo'
                onChange={this.props.inputTask}
                />
            <button type='submit'>Add todo</button>
            <button type='remove'>Clear Completed</button>
        </form>
    );
    }
 }
 

 export default TodoForm;

