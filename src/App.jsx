
import React, { useState } from 'react';

import './App.css';
import TodoList from './TodoList';



function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ name: '', description: '', status: 'not completed' });
  const [filterStatus, setFilterStatus] = useState('all');

  const addTodo = () => {
    setTodos([...todos, { ...newTodo, id: Date.now() }]);
    setNewTodo({ name: '', description: '', status: 'not completed' });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
  };

  const handleStatusChange = (id, selectedStatus) => {
    updateTodo(id, { ...todos.find(todo => todo.id === id), status: selectedStatus });
  };

  const filteredTodos = todos.filter(todo => {
    if (filterStatus === 'all') {
      return true;
    }
    return todo.status === filterStatus;
  });

  return (
    <div className="app">
      <h1 className='title'>My Todo</h1>
      <div className="form-section">
        <label className="horizontal-label">
          
          <input type="text" placeholder='Todo Name' value={newTodo.name} onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })} />
        </label>
        <label className="horizontal-label">
          
          <input type="text" placeholder='Todo Description' value={newTodo.description} onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })} />
        </label>
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div className="filter-section">
        <label>
          Filter Status:
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
        </label>
      </div>

      <TodoList todos={filteredTodos} onDelete={deleteTodo} onUpdate={updateTodo} onStatusChange={handleStatusChange}  />
    </div>
  );
}

export default App;
