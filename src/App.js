import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const todos = [
  {
    name: 'Add Todo',
    id: 4738,
    completed: false
  },

  {
    name: 'Add Button',
    id: 7894,
    completed: false
  }

];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: todos,
      item: ''
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
            name: prevState.item
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
             todo: todoItem.todo,
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

 clearCompleted = () => {
  this.setState(prevState => {
    return {
      todos: prevState.todos.filter(taskItem => {
        return !taskItem.completed;
      })
    }
  });
 }

    render() {
    return (
      <div>
        <h1>Todo App</h1>
        <TodoForm
          todo={this.state.item}
          inputTask={this.inputTask}
          addToDo={this.addToDo}
        />

        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />

        <button onClick={this.clearCompleted}>Completed</button>
      </div>
    );
  }
}

export default App;
