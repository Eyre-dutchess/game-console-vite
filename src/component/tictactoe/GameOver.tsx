import { useMemo } from "react"
 
interface GameOverProps {
  gameState: number
}

export const GameOver = ({gameState}: GameOverProps) => {
    const gameoverTxt = useMemo(()=>{
        if(gameState === 0){
            return "Congrats! PlayerX wins!"
        };
        if(gameState === 1){
            return "Congrats! PlayerO wins!"
        };
        if(gameState === 2){
            return "No winner in this round!"
        }
    }, [gameState])
  return(
    <p className="gameover-txt px-4 py-1 w-max mx-auto truncate font-semibold text-2xl ">{gameoverTxt}</p>
  )
}
