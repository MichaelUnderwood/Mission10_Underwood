import React from 'react';
import logo from './logo.svg';
import './App.css';
import BowlerList from './BowlerInfo/BowlerList';
import Header from './Header';

function App() {
  return (
    <div className="App">
     <Header title="Bowler Information" />
      <BowlerList />
    </div>
  );
}

export default App;
