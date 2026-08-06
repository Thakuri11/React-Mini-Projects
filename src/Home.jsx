import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
export default function Home() {
  useEffect(()=>{
document.title="React Project";
  },[])
  return (
    <>
      <main>
        <h1>React Mini Projects :</h1>
        <div>
          {/* <Link to="/" className="just">Home</Link> */}
          <ul>
            <li>
              <Link to="/tictactoe" className="just">
                Tic-Tac-Toe Game
              </Link>
            </li>
            <li>
              <Link to="/weather" className="just">
                Weather App
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
