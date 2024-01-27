import { useState } from "react";
import Board from "./Board";
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [sort, setSort] = useState("asc");

  const handlePlay = (nextSquares) => {
    // なんでここcurrentMove + 1 なんだ？
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const movesArr = history
    .map((_squares, move) => {
      let description;
      if (move > 0) {
        if (currentMove === move) {
          description = "You are at move #" + move;
        } else {
          description = "Go to move #" + move;
        }
      } else {
        description = "Go to game start";
      }
      return { move: move, description: description };
    })
    .sort((a, b) => {
      if (sort === "asc") {
        if (a.move < b.move) return -1;
        if (a.move > b.move) return 1;
      }
      if (sort === "desc") {
        if (a.move > b.move) return -1;
        if (a.move < b.move) return 1;
      }
      return 0;
    });

  return (
    <div>
      <div>
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        ></Board>
      </div>
      <div>
        <ol>
          {movesArr.map((move) => {
            return (
              <li key={`move-${move.move}`}>
                <button onClick={() => jumpTo(move.move)}>
                  {move.description}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
      <div>
        {sort === "asc" && (
          <button
            onClick={() => {
              setSort("desc");
            }}
            className="bg-gray-500 hover:bg-gray-200"
          >
            降順
          </button>
        )}
        {sort === "desc" && (
          <button
            onClick={() => {
              setSort("asc");
            }}
            className="bg-gray-500 hover:bg-gray-200"
          >
            昇順
          </button>
        )}
      </div>
    </div>
  );
}
