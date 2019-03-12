import React from 'react';

import './App.css';
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
            name: prevState.item,
            id: Date.now(),
            completed: false
          }
        ],
        item: ''
      }
    })
    localStorage.setItem('todos', JSON.stringify('todos'));
    localStorage.setItem('item', '');
  }

 toggleItem = idTodo => {
   this.setState(prevState => {
     return {
       todos: prevState.todos.map(todoItem => {
         if(todoItem.id === idTodo){
           return {
             name: todoItem.name,
             id: todoItem.id,
             completed: !idTodo.completed
           };
         } else {
           return todoItem;
         }
       })
     };
   });
 };

 clearCompleted = () => {
  this.setState(prevState => {
    return {
      todos: prevState.todos.filter(taskItem => {
        return !taskItem.completed;
      })
    };
  });
  localStorage.setItem('todos', JSON.stringify(todos))
 }

 updateInput(key, value){
   this.setState({[key]: value});
   localStorage.set(key, value);
 }

    render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Todo App</h1>
        </div>
        <TodoForm
          todo={this.state.item}
          inputTask={this.inputTask}
          addToDo={this.addToDo}
          clearCompleted={this.clearCompleted}
        />

        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
