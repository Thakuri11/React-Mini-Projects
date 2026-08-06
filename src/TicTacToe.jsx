import "./TicTacToeStyle.css";
import { useState, useEffect } from "react";
export default function TicTacToe() {
  // const Keys = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [turn, setTurn] = useState("A");
  const emptyBoard = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(emptyBoard);
  const [result, setResult] = useState("");
  const [run, setRun] = useState(true);
  const handleClick = (index) => {
    if (result !== "") return;
    const newBoard = [...board];
    if (newBoard[index] !== "") return;
    newBoard[index] = turn === "A" ? "o" : "x";
    setBoard(newBoard);
    setTurn(turn === "A" ? "B" : "A");
  };
  const resetFunction = () => {
    setBoard([...emptyBoard]);
    setTurn("A");
    setResult("");
  };
  useEffect(() => {
    const newBoard = [...board];
    if (
      (newBoard[0] === "o" && newBoard[1] === "o" && newBoard[2] === "o") ||
      (newBoard[3] === "o" && newBoard[4] === "o" && newBoard[5] === "o") ||
      (newBoard[6] === "o" && newBoard[7] === "o" && newBoard[8] === "o") ||
      (newBoard[0] === "o" && newBoard[3] === "o" && newBoard[6] === "o") ||
      (newBoard[1] === "o" && newBoard[4] === "o" && newBoard[7] === "o") ||
      (newBoard[2] === "o" && newBoard[5] === "o" && newBoard[8] === "o") ||
      (newBoard[0] === "o" && newBoard[4] === "o" && newBoard[8] === "o") ||
      (newBoard[2] === "o" && newBoard[4] === "o" && newBoard[6] === "o")
    ) {
      setResult("Player A wins the Game");
    } else if (
      (newBoard[0] === "x" && newBoard[1] === "x" && newBoard[2] === "x") ||
      (newBoard[3] === "x" && newBoard[4] === "x" && newBoard[5] === "x") ||
      (newBoard[6] === "x" && newBoard[7] === "x" && newBoard[8] === "x") ||
      (newBoard[0] === "x" && newBoard[3] === "x" && newBoard[6] === "x") ||
      (newBoard[1] === "x" && newBoard[4] === "x" && newBoard[7] === "x") ||
      (newBoard[2] === "x" && newBoard[5] === "x" && newBoard[8] === "x") ||
      (newBoard[0] === "x" && newBoard[4] === "x" && newBoard[8] === "x") ||
      (newBoard[2] === "x" && newBoard[4] === "x" && newBoard[6] === "x")
    ) {
      setResult("Player B wins the Game");
    } else if (!newBoard.includes("")) {
      setResult("Game is Draw !!");
    }
  }, [board]);
  return (
    <>
      <div className="main-section">
        <div className="container">
          <h1>Tic Tac Toe</h1>
          <p>Current Turn : {turn} </p>
          <div className="board">
            <div>
              <Button value={board[0]} onClick={() => handleClick(0)} />
              <Button value={board[1]} onClick={() => handleClick(1)} />
              <Button value={board[2]} onClick={() => handleClick(2)} />
            </div>
            <div>
              <Button value={board[3]} onClick={() => handleClick(3)} />
              <Button value={board[4]} onClick={() => handleClick(4)} />
              <Button value={board[5]} onClick={() => handleClick(5)} />
            </div>
            <div>
              <Button value={board[6]} onClick={() => handleClick(6)} />
              <Button value={board[7]} onClick={() => handleClick(7)} />
              <Button value={board[8]} onClick={() => handleClick(8)} />
            </div>
          </div>
          <button className="reset-btn" onClick={resetFunction}>
            Reset Game
          </button>
        </div>
        <h2 className="display-result">Result : {result}</h2>
      </div>
    </>
  );
}
const Button = ({ value, onClick }) => {
  return (
    <button className="space" onClick={onClick}>
      {value}
    </button>
  );
};
