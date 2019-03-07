import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todos = [];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todos,
      todo: ''
    };
  }

  inputTask = event =>{
    this.setState({ [event.target.name]: event.target.value });
  };

  addToDo = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos,
          {
            completed: false,
            id: Date.now(),
            name: prevState.todo
          }
        ],
        todo: ''
      }
    })
  }

 toggleItem = idTodo => {
   this.setState(prevState => {
     return {
       todos: prevState.todos.map(todoItem => {
         if(todoItem.id === idTodo){
           return {
             name: todoItem.todo,
             id: todoItem.id,
             completed: !idTodo.completed
           };
         } else {
           return todoItem;
         }
       })
     }
   })
 }

    render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoForm  
          todo={this.state.todo}
          inputTask={this.inputTask}
          addToDo={this.addToDo}
        />

        <TodoList 
          todos={this.state.todos}
          toggleItem={this.toggleItem}
        />
        
      </div>
    );
  }
}

export default App;
