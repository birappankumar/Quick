import React from 'react';
import './App.css'; 
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board</h1>
      </header>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;
