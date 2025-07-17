
import games from "@/assets/gameData.json";
import { Container } from "../component/Container";
import { ConsoleBox } from "../component/ConsoleBox";

const HomePage = () => {
  return (
    <Container classname="flex-col gap-6">
      <h1 className="text-5xl md:text-7xl">Game Console</h1>
      <div className="main-console">
        {games.map((game, i)=>{
          return (
          <ConsoleBox key={i} title={game.name} src={game.imgSrc} link={game.link}/>
        )})}
      </div>
      <div></div>
    </Container>
  )
}

export default HomePage