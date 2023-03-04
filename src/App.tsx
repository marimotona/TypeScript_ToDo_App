import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    }

    setTodos([newTodo, ...todos]);
    setInputValue("");
  }

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);

  }

  const handleDelete = (id: number) => {
    const newTodos = setTodos(todos.filter((todo) => todo.id !== id));
    return newTodos;
  }

  return (
    <div className="App">
      <header>TypeScript ToDo</header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => handleChange(e)} className="inputText" />
        <input type="submit" value="Button" className="changeButton" />
      </form>
      <div className='todoList'>
        {todos.map((todo) => (
          <div className='todo'>
            <p key={todo.id} className="todoText">
              <input type="text" onChange={(e) => handleEdit(todo.id, e.target.value)} value={todo.inputValue} disabled={todo.checked} className="inputText"/>
              <input type="checkbox" onChange={(e) => handleChecked(todo.id, todo.checked)} />
              <div className='icons'>
                <button onClick={(e) => handleDelete(todo.id)}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
