import Square from "./Square";
import { useState } from "react";

export default function Board({ xIsNext, squares, onPlay }) {
  let finalHand;
  const [currentHand, setCurrentHand] = useState(null);
  const handleClick = (i) => {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "x";
    } else {
      nextSquares[i] = "O";
    }
    setCurrentHand(String(i));
    onPlay(nextSquares);
  };

  //なんでここのstatusはstateにしないんだ？
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
    finalHand = currentHand;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <div>
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          number="0"
          finalHand={finalHand}
        ></Square>
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          number="1"
          finalHand={finalHand}
        ></Square>
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          number="2"
          finalHand={finalHand}
        ></Square>
      </div>
      <div>
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          number="3"
          finalHand={finalHand}
        ></Square>
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          number="4"
          finalHand={finalHand}
        ></Square>
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          number="5"
          finalHand={finalHand}
        ></Square>
      </div>
      <div>
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          number="6"
          finalHand={finalHand}
        ></Square>
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          number="7"
          finalHand={finalHand}
        ></Square>
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          number="8"
          finalHand={finalHand}
        ></Square>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
