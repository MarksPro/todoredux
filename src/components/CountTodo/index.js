import React from 'react';
import {connect} from 'react-redux';

const CountTodo = (props) => {  
  console.log(props)
  return (
  <div>
    <h1>Tarefas</h1>
    <div>
      <h3>Tarefas a fazer: {props.todosCount(false)}</h3>
      <h3>Tarefas concluidas: {props.todosCount(true)}</h3>
    </div>
  </div>
)};

const mapStateToProps = state => ({
  todosCount: bool => state.todos.filter(todo => (
    todo.completed === bool
  )).length
});

export default connect(mapStateToProps)(CountTodo);