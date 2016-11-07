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

class All extends Component {

  componentDidMount() {
    const { loadTodos } = this.props;
    loadTodos('all');
  }

  render() {
    return (
      <div>
        <h2>All <Link to='/'>done</Link></h2>
        <TodoList todos={this.props.todos} onTodoClick={this.props.completeTodo} />
      </div>
    );
  }

}

All = connect((state) => ({
  todos: getTodosAsArray(state.todos, 'all'),
}), {
  loadTodos,
  completeTodo,
})(All);

export default All;
