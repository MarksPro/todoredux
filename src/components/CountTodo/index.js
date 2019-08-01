import React from 'react';
import {connect} from 'react-redux';

const CountTodo = (props) => {
  let todoCompleted = props.todos.filter(todo => (
    todo.completed === true
  )).length

  let todoNotCompleted = props.todos.filter(todo => (
    todo.completed === false
  )).length
  
  return (
  <div>
    <h1>Tarefas</h1>
    <div>
      <h3>Tarefas a fazer: {todoNotCompleted} </h3>
      <h3>Tarefas concluidas: {todoCompleted}</h3>
    </div>
  </div>
)};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(CountTodo);