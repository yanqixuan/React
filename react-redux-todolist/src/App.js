import React from 'react';
import AddTo from './todo/AddTo'
import TodoLists from './todo/TodoList'
import Filter from './todo/Filter'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <AddTo/>
      <TodoLists/>
      <Filter/>
    </div>
  );
}

export default App;
