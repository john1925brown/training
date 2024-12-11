import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

type PropsType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App1() {
  const [todos, setTodos] = useState<Array<PropsType>>([]);

  const getTodos = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((responce) => {
      setTodos(responce.data);
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const onClickHandlerDisplay = () => {
    getTodos();
  };

  const onClickHandlerDelete = () => {
    setTodos([]);
  };

  const mapTodos = todos.map((el) => {
    return (
      <li key={el.id}>
        <span>{el.id} - </span>
        <span>{el.title}</span>
        <span>{el.completed}</span>
      </li>
    );
  });

  return (
    <div className="App">
      <button onClick={onClickHandlerDelete}>CLEAN POSTS</button>
      <button onClick={onClickHandlerDisplay}>DISPLAY</button>

      <ul>{mapTodos}</ul>
    </div>
  );
}

export default App1;
