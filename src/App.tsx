import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  return (
    <div className="App">
      <header>TypeScript ToDo</header>
      <form>
        <input type="text" onChange={() => {}} className="inputText" />
        <input type="submit" value="Button" className="changeButton" />
      </form>
    </div>
  );
}

export default App;
