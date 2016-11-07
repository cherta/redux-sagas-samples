/* @flow */
import React from 'react'

const Todo = ({ onClick, status, text }: {onClick: () => void, status: string, text: string}) => (
  <li onClick={onClick} style={{
      textDecoration: status === 'complete' ? 'line-through' : 'none'
    }}>
    {text}
  </li>
);

export default Todo;
