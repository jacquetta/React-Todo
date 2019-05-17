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


  componentDidMount(){
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
}

  componentWillUnmount(){
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage(){
    for(let key in this.state) {
      if(localStorage.hasOwnProperty(key)){
        let value = localStorage.getItem(key);

        try{
          value = JSON.parse(value);
          this.setState({ [key]: value});
        } catch(e) {
          this.setState({ [key]: value})
        }
      }
    }
  }

  saveStateToLocalStorage(){
    for(let key in this.state){
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateInput(key, value){
    this.setState({[key]: value})
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
            completed: false,
          },
        ],
        item: ''
      }
    })
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
