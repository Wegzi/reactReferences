import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todo.completed){
      return {
        textDecoration: 'line-through'
      }
    }
    else{
      return {
        textDecoration: 'none'
      }
    }

    return {
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }


  }


  render() {
    const { id, title } = this.props.todo;
    return(
      <div style={this.getStyle(), itemStyle }>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
        { title }
        <button onClick={this.props.delTodo.bind(this, id)} >x</button>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}
const itemStyle = {
  backgroundColor:'#f4f4f4',
  margim: '10px'
}

export default TodoItem
