import React from 'react';
import SelectRemove from '../SelectRemove';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsTodo from '../../store/actions/todos';

const TodoList = (props) => (
  <>
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => props.removeTodo(todo.id)}>
            Remover
          </button>
          <button onClick={() => props.isCompleted(todo.id)}>
            {todo.completed ? 'Refazer' : 'Finalizar'}
          </button>
        </li>
      ))}
    </ul>
    <SelectRemove/>
  </>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool
  })).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(actionsTodo, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);