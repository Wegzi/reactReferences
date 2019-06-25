import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="add todo"
          style={{margin: '10px'}}
          value={this.state.title}
          onChange={this.onChange}
        />
      <input
        type="submit"
        value="Submit"
      />
      </form>
    )
  }
}
export default AddTodo;
