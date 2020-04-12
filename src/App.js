import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoubleGame from './DoubleGame';

function App() {
    return (
    <div className="App">
      <DoubleGame numOfPlayers={2}/>
    </div>
  );
}

export default App;
