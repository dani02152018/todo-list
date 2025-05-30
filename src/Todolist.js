import React, { useState } from 'react';
import './styles/Todolist.css';
import bgImage from './assets/cat.jpg'; 

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="todo-container">
        <h2>Todo List</h2>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add new todo"
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
              <span>{todo.text}</span>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
