const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({ onSelectSquare }) {
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
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
