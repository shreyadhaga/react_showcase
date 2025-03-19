import { useState } from "react";
import Gameboard from "./components/Gameboard/Gameboard";
import Player from "./components/Player/Player";

function App() {
  const[gameTurns, setGameTurns] = useState([]);
  const[activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare(rowIndex, colIndex){
    setActivePlayer((currValue) => currValue === 'X'? 'O': 'X');
    setGameTurns(prevTurns => {
      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O'
      }
      const updatedTurns = [{square:{row: rowIndex, col:colIndex}, player: currentPlayer}, ...prevTurns];
      return updatedTurns;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className={activePlayer? "highlight-player": undefined}>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <Gameboard activePlayerSymbol={activePlayer} onSelectSquare={handleSelectSquare}/>
      </div>
      LOG
    </main>
  );
}

export default App;
