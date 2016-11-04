import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load as loadTodos } from '../reducers/todos';

class All extends Component {
  componentDidMount() {
    const { loadTodos } = this.props;
    loadTodos('all');
  }

  render() {
    return (
      <div>
        All
      </div>
    );
  }
}

All = connect((state) => ({
  a: 'b',
}), {
  loadTodos,
})(All);

export default All;
