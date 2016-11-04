import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load as loadTodos } from '../reducers/todos';
import { getAsArray as getTodosAsArray } from '../selectors/todos';
import TodoList from '../components/TodoList';

class All extends Component {
  componentDidMount() {
    const { loadTodos } = this.props;
    loadTodos('all');
  }

  render() {
    return (
      <div>
        <h2>All</h2>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

All = connect((state) => ({
  todos: getTodosAsArray(state.todos),
}), {
  loadTodos,
})(All);

export default All;
