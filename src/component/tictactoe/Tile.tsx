// import { useMemo } from "react"
import { CrossMark } from "../../assets/Cross_svg"
import { HeavyLargeCircle } from "../../assets/Circle_svg"

interface TileProps {
  value: string | null
  onClick: (i: number)=> void
  playerTurn: string | null
  index: number
}

export const Tile =({index,  value, onClick, playerTurn}: TileProps) =>{
    let hoverClass= null;
    if(value == null && playerTurn !== null){
        hoverClass = `${playerTurn}-hover`
    }


    return (
        <div onClick={()=> onClick(index)} className={`${value && "bg-white/75"} relative z-0 transition cursor-pointer text-blue-900 w-full h-full bg-white/5  rounded-md overflow-hidden flex items-center justify-center
             ${hoverClass}`}>
            {value == "X" && (<CrossMark />)} 
            {value == "O" && (<HeavyLargeCircle />)} 
        </div>
    )
}

export default Tile;