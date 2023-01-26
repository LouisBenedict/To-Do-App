import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';

function App() {
  const [todos, setTodos] = useState([
    {
      task: 'Shop for CNY',
      isCompleted: true,
    },
    {
      task: 'Write a blog post',
      isCompleted: true,
    },
    {
      task: 'Go to the gym',
      isCompleted: true,
    },
    {
      task: 'Diet for 2 weeks',
      isCompleted: false,
    },
    {
      task: "Start a live stream",
      isCompleted: false,
    },
    {
      task: "Finish the project",
      isCompleted: true,
    },
    {
      task: 'Meditate for 10 minutes', 
      isCompleted: false,
    },
  ]);

  function createTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos.splice(i + 1, 0, {
      task: '',
      isCompleted: false,
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[i + 1].focus();
    }, 0);
  }

  function updateTodoAtIndex(e, i) {
    const newTodos = [...todos];
    newTodos[i].task = e.target.value;
    setTodos(newTodos);
  }

  function removeTodoAtIndex(i) {
    if (i === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos];
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted;
    setTodos(temporaryTodos);
  }

  function handleKeyDown(e, i) {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, i);
    }
    if (e.key === 'Backspace' && todos[i].task === '') {
      e.preventDefault();
      return removeTodoAtIndex(i);
    }
  }

  return (
    <div className="app">
      <div className="todo-list-header">
        <Header />
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
              <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
                {todo.isCompleted && (
                  <span>&#x2714;</span>
                )}
              </div>
              <input
                type="text"
                value={todo.task}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
