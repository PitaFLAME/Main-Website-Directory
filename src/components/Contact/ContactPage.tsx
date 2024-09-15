import Tile from "../Tiles/Tile"
import { getContent } from "./TileContent"



const ContactPage = () => {


    return (
        <div className="grid 
          grid-cols-8 grid-rows-8
          md:grid-cols-12 md:grid-rows-12
          h-[70vh] w-full gap-2">
          
          <Tile sizeType={6} accentID={8} orientation={4} render={getContent(0)} />
          


          
        </div>
    )
}

export default ContactPage