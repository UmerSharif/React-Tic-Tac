import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  const handleClick = i => {
    const newSquare = { ...squares, squares };
    console.log(newSquare);
    newSquare[i] = xIsNext ? "X" : "O";
    console.log(newSquare[i]);
    setSquares(newSquare);
    setxIsNext(!xIsNext);
  };
  const renderSquare = i => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  return (
    <div>
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