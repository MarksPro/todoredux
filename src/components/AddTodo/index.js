import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsTodos from '../../store/actions/todos';

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
    if(this.state.inputTodoText === '' || this.state.inputTodoText.length < 4)
      alert('Digite uma tarefa valida para adicionar a lista');
    else
      this.props.addTodo(this.state.inputTodoText);
    this.setState({inputTodoText: ''});
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

const mapDispatchToProps = dispatch => bindActionCreators(actionsTodos, dispatch)

export default connect(null,mapDispatchToProps)(index);