import React from 'react'

export default class Todo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      todo: this.props.todopropname
    }
  }

  delete(){
    this.props.deleteToDo(this.props.position)
  }

  update(event){
    this.setState({todo: event.target.value})
    this.props.updateToDo(event.target.value, this.props.position)
  }

  render(){
    return(
      <div>
        <input onChange={this.update.bind(this)} value={this.state.todo} />
        <button onClick={this.delete.bind(this)}>delete</button>
      </div>
    )
  }

}