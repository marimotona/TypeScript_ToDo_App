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
  }

  return (
    <div className="App">
      <header>TypeScript ToDo</header>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" onChange={(e) => handleChange(e)} className="inputText" />
        <input type="submit" value="Button" className="changeButton" />
      </form>
    </div>
  );
}

export default App;
