import { useEffect, useState} from "react";
import gameOverSound from "../../assets/sound/game_over.wav"
import clickSound from "../../assets/sound/click.wav"
import Board from "./Board";
import GameState from "./GameState";
import { GameOver } from "./GameOver";
import { ResetGame } from "./ResetGame";

//sound
const gameOverAudio = new Audio(gameOverSound)
gameOverAudio.volume = 0.5;
const clickAudio = new Audio(clickSound)
clickAudio.volume = 0.5;

//player
const PLAYER_X = "X";
const PLAYER_O = "O";

//winning scenerio
const winningGrid = [
    {combo:[0, 1, 2], strikeClass:"strike-row"},
    {combo:[3, 4, 5], strikeClass:"strike-row"},
    {combo:[6, 7, 8], strikeClass:"strike-row"},
    {combo:[0, 3, 6], strikeClass:"strike-col"},
    {combo:[1, 4, 7], strikeClass:"strike-col"},
    {combo:[2, 5, 8], strikeClass:"strike-col"},
    {combo:[0, 4, 8], strikeClass:"strike-dial"},
    {combo:[2, 4, 6], strikeClass:"strike-dial"},
]

//check winner fnc()
function checkWinner(tiles: null[]|string[],         
                     setStrikeClass: React.Dispatch<React.SetStateAction<undefined| string>>,
                     setGameState: (state: number)=> void){
    for(const {combo, strikeClass} of winningGrid){
        const tileValue1 = tiles[combo[0]]
        const tileValue2 = tiles[combo[1]]
        const tileValue3 = tiles[combo[2]]

        if(
            tileValue1 !==null && 
            tileValue1 === tileValue2 &&
            tileValue1 === tileValue3
        ){
            setStrikeClass(strikeClass);
            if(tileValue1 === PLAYER_X){
                setGameState(GameState.playerXWin)
            }else{
                setGameState(GameState.playerOWin)
            }
            return;
        }
    }

    const allTilesFilled = tiles.every((tile: string | null)=> tile !== null);
    if(allTilesFilled){
        setGameState(GameState.tieNoWin)
    }
}


//main
const TicTacToe = () => {
    const [tiles, setTiles] = useState(Array(9).fill(null))
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X)
    const [strikeClass, setStrikeClass] = useState<string | undefined>();
    const [gameState, setGameState] = useState(GameState.inProgress)

    const handleTileClick = (i: number) =>{
        if(gameState !== GameState.inProgress){
            return;
        }
        if(tiles[i] !== null){
            return;
        }

        const newTiles = [...tiles];
        newTiles[i] = playerTurn;
        setTiles(newTiles);
        if(playerTurn === PLAYER_X){
            setPlayerTurn(PLAYER_O)
        }else{
            setPlayerTurn(PLAYER_X)
        }

    }

    const handleReset = () =>{
        setGameState(GameState.inProgress)
        setTiles(Array(9).fill(null))
        setPlayerTurn(PLAYER_X)
        setStrikeClass(undefined)
    }

    useEffect(()=>{
        checkWinner(tiles, setStrikeClass, setGameState)
    }, [tiles])
    useEffect(()=>{
        if(tiles.some((tile)=> tile !== null)){
            clickAudio.play();
        }
    }, [tiles])
    useEffect(()=>{
        if(gameState !== GameState.inProgress){
            gameOverAudio.play()
        }
    }, [gameState])
    
    return (
        <div className="container  flex flex-col items-center justify-center space-y-2">
            <h1 className="title truncate text-5xl lg:text-8xl">TicTacToe Game</h1>
            {(gameState !== 3) &&<GameOver gameState={gameState}/>}
            <Board tiles={tiles} playerTurn={playerTurn} onTileClick={handleTileClick} strikeClass={strikeClass}/>
            {(gameState !== 3) && <ResetGame onClick = {handleReset}/>}
        </div>
    )
}

export default TicTacToe