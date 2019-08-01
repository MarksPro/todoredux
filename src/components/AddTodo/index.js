import React, { Component } from 'react';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      inputTodoText: ''
    };
  }

  getInputText = e => {
    this.setState({inputTodoText: e.target.value});
  }

  addTodo = event => {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.addTodo}>
        <input
          placeholder="Escreva sua tarefa" 
          type="text"
          value={this.state.inputTodoText}
          onChange={this.getInputText}
        />
        <button type="submit">Adicionar Tarefa</button>
      </form>
    );
  }
}

export default index;