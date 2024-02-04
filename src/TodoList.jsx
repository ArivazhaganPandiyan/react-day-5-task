
import React from 'react';
import Todo from './Todo';
import './TodoList.css';


function TodoList({ todos, onDelete, onUpdate, onStatusChange }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate} onStatusChange={onStatusChange} />
      ))}
    </div>
  );
}

export default TodoList;
