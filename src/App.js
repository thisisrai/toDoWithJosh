import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.jsx'

const seedTodos = ["Get Job", "Buy Coffee for Rai"]

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ToDos: seedTodos, 
      input: ""
    }
  }

  changeInput(event){
    this.setState({input: event.target.value})
  }

  addingToDos(){
    let newArray = this.state.ToDos.concat(this.state.input)
    this.setState({
      ToDos: newArray,
      input: ""
    })
  }

  deleteToDo(position){
    let newArray = this.state.ToDos
    newArray.splice(position, 1)
    this.setState({ToDos: newArray})
  }

  updateToDo(todo, position){
    let newArray = this.state.ToDos
    newArray.splice(position, 1, todo)
    this.setState({ToDos: newArray})
  }


  render() {
    return (
      <div>
        <h3>Awesome ToDo with Joshua</h3>
        <input  placeholder="Type Todo here..." value={this.state.input} onChange={this.changeInput.bind(this)} />
        <button onClick={this.addingToDos.bind(this)} >submit</button>
        {this.state.ToDos.map((todo,index) => <Todo 
        todopropname={todo} 
        key={index}
        position={index}
        deleteToDo={this.deleteToDo.bind(this)}
        updateToDo={this.updateToDo.bind(this)}
        />)}
      </div>
    );
  }
}

export default App;
