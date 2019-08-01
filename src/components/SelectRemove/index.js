import React from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionsTodo from '../../store/actions/todos';

const SelectRemove = (props) => (
  <div>
  {props.todos.length > 0 &&
  <>
    {props.todos.length > 1 && 
      <button onClick={props.removeAll}>Remover todos</button>
    }
    {props.todos.some(todo => (
      todo.completed
    )) &&
      <button onClick={props.selectRemove}>Remover Finalizados</button>
    }
  </>
  }
  </div>
);

SelectRemove.propTypes = {
  removeAll: PropTypes.func.isRequired,
  selectRemove: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => bindActionCreators(actionsTodo, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectRemove);