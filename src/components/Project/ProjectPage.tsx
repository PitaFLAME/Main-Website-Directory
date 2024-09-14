import Tile from "../Tiles/Tile"
import TileGroup from "../Tiles/TileGroup"
import { getContent } from "./TileContent"



const ProjectPage = () => {


    return (
        <div className="grid 
          grid-cols-8 grid-rows-8
          md:grid-cols-12 md:grid-rows-12
          h-[70vh] w-full gap-2">
          
          <Tile sizeType={7} accentID={7} orientation={1} render={getContent(0)} />
          <Tile sizeType={8} accentID={6} orientation={2} render={getContent(3)} />
          <div />
          <div />
          <Tile sizeType={5} accentID={9} orientation={3} render={getContent(1)} />
          <Tile sizeType={6} accentID={9} orientation={4} render={getContent(2)} />
          
          

        </div>
    )
}

export default ProjectPage