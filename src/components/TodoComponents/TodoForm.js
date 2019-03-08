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
                placeholder='Add Todo'
                value={this.props.item}
                name='item'
                onChange={this.props.inputTask}
                />
            <button type='submit'>Add todo</button>
            <button type='remove'>Completed</button>
        </form>
    );
    }
 }
 

 export default TodoForm;

