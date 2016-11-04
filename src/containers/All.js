import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load as loadTodos } from '../reducers/todos';
import { getAsArray as getTodosAsArray } from '../selectors/todos';
import { Link } from 'react-router';
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
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

All = connect((state) => ({
  todos: getTodosAsArray(state.todos, 'all'),
}), {
  loadTodos,
})(All);

export default All;
