/* @flow */
import React from 'react'
import Todo from './Todo'
import type { Todo as TodoType } from '../todos-types';

const TodoList = ({todos, onTodoClick}: { todos: Array<TodoType>, onTodoClick:(id:number) => void }) => (
  <ul>
    {todos.map(todo =>
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    )}
    { todos.length === 0 && <li>No Items</li>}
  </ul>
);

export default TodoList;
