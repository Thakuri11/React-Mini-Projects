import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import TicTacToe from "./TicTacToe";
import Weather from "./Weather";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tictactoe" element={<TicTacToe/>} />
        <Route path="/weather" element={<Weather/>} />
      </Routes>
    </BrowserRouter>
  );
}
