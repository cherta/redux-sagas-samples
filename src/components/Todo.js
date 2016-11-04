import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li onClick={onClick}>
    {text}
  </li>
);

export default Todo;
