import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'one',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'two',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'tree',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState( { todo: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) } )
  }
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render(){

  return (
    <div className="App">
      <Header />
      <AddTodo addTodo={this.addTodo}/>
      <Todos
        todos={this.state.todos}
        markComplete={this.markComplete}
        delTodo={this.delTodo}
      />
    </div>
  );}
}

export default App;
