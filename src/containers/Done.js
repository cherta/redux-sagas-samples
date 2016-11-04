import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load as loadTodos } from '../reducers/todos';
import { getAsArray as getTodosAsArray } from '../selectors/todos';
import TodoList from '../components/TodoList';

class Done extends Component {
  componentDidMount() {
    const { loadTodos } = this.props;
    loadTodos('complete');
  }

  render() {
    return (
      <div>
        <h2>Done</h2>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

Done = connect((state) => ({
  todos: getTodosAsArray(state.todos),
}), {
  loadTodos,
})(Done);

export default Done;
