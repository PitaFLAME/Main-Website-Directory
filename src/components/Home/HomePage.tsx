import Tile from "../Tiles/Tile"
import { getContent } from "./TileContent"
import TileGroup from "../Tiles/TileGroup"



const HomePage = () => {


    return (
        <div className="grid 
          grid-cols-8 grid-rows-8
          md:grid-cols-12 md:grid-rows-12
          h-[70vh] w-full gap-2">
          
          <Tile sizeType={8} accentID={9} render={getContent(0)} orientation={4} />
          <Tile sizeType={7} accentID={8} render={getContent(4)} orientation={1} />
          <TileGroup sizeType={9} orientation={4} tiles={[ 
                    (<Tile sizeType={11} accentID={9} key={0} />),
                    (<Tile sizeType={3} accentID={8} render={getContent(5)} key={1} />) ]} />
          
          <Tile sizeType={5} accentID={9} render={getContent(3)} />

          <Tile sizeType={7} accentID={8} render={getContent(2)} orientation={3} />
          <Tile sizeType={9} accentID={7} orientation={2} />
          <Tile sizeType={8} accentID={9} render={getContent(1)} orientation={2} />
          

        </div>
    )
}

export default HomePage