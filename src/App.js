import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DoubleGame from "./DoubleGame";
import GameBar from "./GameBar/GameBar";

function App() {
  return (
    <div className="App">
      <GameBar />
      <DoubleGame numOfPlayers={2} />
    </div>
  );
}

export default App;
