import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import { SnakeGamePage } from "./pages/SnakeGamePage"
import { SpaceShooterPage } from "./pages/SpaceShooterPage"
import { TicTacToePage } from "./pages/TicTacToePage"
import { TetrisPage } from "./pages/TetrisPage"
import { QuizPage } from "./pages/QuizPage"
import { HangManPage } from "./pages/HangManPage"
import { ChessPage } from "./pages/ChessPage"


function App() {
  return (
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/hangman" element={<HangManPage />}/>
          <Route path="/snakegame" element={<SnakeGamePage />}/>
          <Route path="/spaceshooter" element={<SpaceShooterPage />}/>
          <Route path="/tictactoe" element={<TicTacToePage />}/>
          <Route path="/tetris" element={<TetrisPage />}/>
          <Route path="/quiz" element={<QuizPage />}/>
          <Route path="/chess" element={<ChessPage />}/>
        </Routes>
      
  )
}

export default App
