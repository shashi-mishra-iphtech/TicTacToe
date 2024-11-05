import React, { useState } from "react";
import Blocks from "./Blocks";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);

  const handleClick = (index) => {
    if (state[index] != null || isWinner) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setState(copyState);
    setIsXturn(!isXturn);
  };

  const checkWinner = () => {
    const winList = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i of winList) {
      const [a, b, c] = i;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return "Winner: Player " + state[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner();
  return (
    <div className="container">
      <h1 className="heading">Tic Tac Toe</h1>
      {!isWinner ? (
        <h2>
          Player <span style={{ color: "#fff" }}>{isXturn ? "X" : "O"}</span>{" "}
          move
        </h2>
      ) : (
        <h2>
          Congratulations...{" "}
          <img
            src="cracker.png"
            alt="img"
            width={40}
            style={{ verticalAlign: "baseline" }}
          />
        </h2>
      )}
      <div className="board-row row">
        {state.map((e, i) => (
          <div className="col-md-4 col-4 col-sm-4" key={i}>
            <Blocks onClick={() => handleClick(i)} value={state[i]} />
          </div>
        ))}
      </div>

      <div className="winner">
        {isWinner ? (
          <>
            <h2>{isWinner}</h2>
            <button
              className="btn btn-warning"
              onClick={() => setState(Array(9).fill(null))}
            >
              Play again
            </button>
          </>
        ) : !state.includes(null) && !isWinner ? (
          <>
            <h2>Draw Game</h2>
            <button
              className="btn btn-warning"
              onClick={() => setState(Array(9).fill(null))}
            >
              Play again
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Board;
