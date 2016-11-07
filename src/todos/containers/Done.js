/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  load as loadTodos,
  complete as completeTodo
} from '../todos-actions';
import { getAsArray as getTodosAsArray } from '../todos-selectors';
import TodoList from '../components/TodoList';

class Done extends Component {
  componentDidMount() {
    const { loadTodos } = this.props;
    loadTodos('complete');
  }

  render() {
    return (
      <div>
        <h2>Done <Link to='/all'>all</Link></h2>
        <TodoList todos={this.props.todos} onTodoClick={this.props.completeTodo} />
      </div>
    );
  }
}

Done = connect((state) => ({
  todos: getTodosAsArray(state.todos, 'complete'),
}), {
  loadTodos,
  completeTodo,
})(Done);

export default Done;
