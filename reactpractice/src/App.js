import React from "react";
import WeddingTodoList from "./WeddingTodoList/index";
import TodoList from './TodoList/TodoList'
import AddTodo from "./AddTodo/Addtodo";
import { async } from "q";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toto: [{text:'wsh life'}],
      todos: []
    }
  }

  render() {
    return (
      <div>
        <TodoList></TodoList>
        <ul>
        <li>
               
        <WeddingTodoList updateTodoFn={this.updateTodo} todos={this.state.todos}></WeddingTodoList>
        <AddTodo addTodoFn={this.addTodo}></AddTodo>
        </li>
        </ul>
        
      </div>
    );

  }
  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log('no todos');
    }
  }

  addTodo = async (todo) => {
    await this.setState({
      todos: [...this.state.todos, {
        text: todo,
        completed: false
      }]
    })
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
    console.log(localStorage.getItem('todos'));

  }

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      if (todo === _todo)
        return {
          text: todo.text,
          completed: !todo.completed
        }
      else
        return _todo
    });
    await this.setState({ todos: newTodos })
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

}

export default App;
