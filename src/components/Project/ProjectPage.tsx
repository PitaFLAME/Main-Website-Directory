import Tile from "../Tiles/Tile"
import TileGroup from "../Tiles/TileGroup"
import { getContent } from "./TileContent"



const ProjectPage = () => {


    return (
        <div className="grid 
          grid-cols-8 grid-rows-8
          md:grid-cols-12 md:grid-rows-12
          h-[70vh] w-full gap-2">
          
          <Tile sizeType={7} accentID={3} orientation={1} render={getContent(0)} />
          <Tile sizeType={8} accentID={3} orientation={2} render={getContent(3)} />
          <div className="col-span-2 row-span-2" />
          
          <TileGroup sizeType={7} orientation={3} tiles={[
            (<Tile key={0} sizeType={5} accentID={4} render={getContent(1)} />),
            (<Tile key={1} sizeType={4} accentID={6}  />)
          ]}
          />
          
          <Tile sizeType={6} accentID={4} orientation={4} render={getContent(2)} />
          
          
          
          

        </div>
    )
}

export default ProjectPage