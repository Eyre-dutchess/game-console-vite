import { Container } from "@/component/Container"
import TicTacToe from "@/component/tictactoe/TicTacToe"
import { HiOutlineArrowLeftOnRectangle } from "react-icons/hi2"
import { Link } from "react-router-dom"


export const TicTacToePage = () => {
  return(
    <Container>
      <Link to="/" className="absolute top-5 left-5 border border-white/50 text-white rounded-full p-2 cursor-pointer hover:bg-white hover:text-blue-400">
            <HiOutlineArrowLeftOnRectangle size={30}/>
      </Link>
      <TicTacToe />
    </Container>
  )
}
