

import React, { useState } from 'react';
import './Todo.css';

function Todo({ todo, onDelete, onUpdate }) {
  const [status, setStatus] = useState(todo.status);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ name: todo.name, description: todo.description });

  const handleStatusChange = (event) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    onUpdate(todo.id, { ...todo, status: newStatus });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
    onUpdate(todo.id, { ...todo, ...editedTodo });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTodo({ name: todo.name, description: todo.description });
  };

  return (
    <div className="todo-card">
      <div className="todo-details">
        <div className="todo-info">
          {isEditing ? (
            <>
              <label>
                Name:
                <input
                  type="text"
                  value={editedTodo.name}
                  onChange={(e) => setEditedTodo({ ...editedTodo, name: e.target.value })}
                />
              </label>
              <label>
                Description:
                <input
                  type="text"
                  value={editedTodo.description}
                  onChange={(e) => setEditedTodo({ ...editedTodo, description: e.target.value })}
                />
              </label>
            </>
          ) : (
            <>
              <h3>Name: {todo.name}</h3>
              <p>Description: {todo.description}</p>
            </>
          )}
          <p>Status: {status}</p>
        </div>
        <div className="status-buttons">
          <label>
            Change Status:
            <select value={status} onChange={handleStatusChange}>
              <option value="completed">Completed</option>
              <option value="not completed">Not Completed</option>
            </select>
          </label>
        </div>
      </div>
      <div className="edit-delete-buttons">
        {isEditing ? (
          <>
            <button className="edit-button" onClick={handleSaveEdit}>
              Save
            </button>
            <button className="cancel-button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="edit-button" onClick={handleEditClick}>
              Edit
            </button>
            <button className="delete-button" onClick={() => onDelete(todo.id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Todo;
