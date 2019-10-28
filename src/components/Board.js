import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  const handleClick = i => {
    const newSquare = [...squares];
    if (newSquare[i] === null) {
      newSquare[i] = xIsNext ? "X" : "O";
      setSquares(newSquare);
      setxIsNext(!xIsNext);
      winnerDude(newSquare);
    }
  };

  function winnerDude(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let index = 0; index < lines.length; index++) {
      const [a, b, c] = lines[index];

      if (
        //initialy check if the sqaure[a] exist. otherwise it will immediately return winner
        // as at first click it will compare all the empty values and return true.
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const renderSquare = i => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  return (
    <div>
      <div className="currentPlayer">
        Next player is : {xIsNext ? "X" : "O"}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
