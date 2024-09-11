import Tile from "../Tile"
import { getContent } from "../TileContent"
import TileGroup from "../TileGroup"



const HomePage = () => {


    return (
        <div className="grid 
          grid-cols-8 grid-rows-8
          md:grid-cols-12 md:grid-rows-12
          h-[70vh] w-full gap-2">
          
          <Tile sizeType={8} accentID={4} render={getContent(0)} orientation={4} />
          <Tile sizeType={7} accentID={3} render={getContent(4)} orientation={1} />
          <TileGroup sizeType={9} orientation={4} tiles={[ 
                    (<Tile sizeType={11} accentID={4} key={0} />),
                    (<Tile sizeType={3} accentID={3} render={getContent(5)} key={1} />) ]} />
          
          <Tile sizeType={5} accentID={4} render={getContent(3)} />

          <Tile sizeType={7} accentID={3} render={getContent(2)} orientation={3} />
          <Tile sizeType={9} accentID={2} orientation={2} />
          <Tile sizeType={8} accentID={4} render={getContent(1)} orientation={2} />
          

        </div>
    )
}

export default HomePage