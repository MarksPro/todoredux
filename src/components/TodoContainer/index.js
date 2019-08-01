import React from 'react';
import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import CountTodo from '../CountTodo';

const TodoContainer = () => (
  <>
    <CountTodo/>
    <AddTodo/>
    <TodoList/>
  </>
);

export default TodoContainer;