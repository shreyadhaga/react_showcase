
export default function Gameboard({ onSelectSquare, board }) {
  //Derived Satate

  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // //   function handleSelectSquare(rowIndex, colIndex) {
  // //     setGameBoard((prevGameBoard) => {
  // //       prevGameBoard[rowIndex][colIndex] = "X";
  // //       return prevGameBoard;
  // //     });
  // //   }
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol !== null}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
