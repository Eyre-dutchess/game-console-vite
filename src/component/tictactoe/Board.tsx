import Tile from "./Tile"

interface BoardProps {
    tiles: string[] | null[],
    onTileClick: (i: number)=> void,
    playerTurn: string
    strikeClass?: string | undefined
}


export const Board = ({tiles, onTileClick,  playerTurn}: BoardProps) => {
  return (
    <>
      <div className="board w-4/5 md:w-2/3 divide-y divide-x divide-blue-900/50 max-w-[500px] aspect-square rounded-md grid grid-rows-3 grid-cols-3">
          {tiles.map((tile, index) =>{
            return (
              <Tile key={index} index={index} onClick={()=> onTileClick(index)} playerTurn={playerTurn}  value={tile} />
            )
          })}
      </div>
      {/* <p className={`${strikeClass}`}>strike</p> */}
    </>
  )
}

export default Board