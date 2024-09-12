import { getAccent } from "../Globals"
import { getSvg } from "../SvgData"



const ThingsCarousel = () => {

    const things = [
        ( <p key={0} className="text-sm">Web Development</p>),
        ( <p key={1} className="text-sm">Mobile Development</p>),
        ( <p key={2} className="text-sm">Game Development</p>),
        ( <p key={3} className="text-sm">UI/UX Design</p>),
        ( <p key={4} className="text-sm">Graphic Design</p>),
        ( <p key={5} className="text-sm">IT & Networking</p>),
    ]

    return (
        <div className="flex justify-center items-center h-40 w-48">
            <div className="absolute flex flex-col items-center h-32 w-36">
                <div className={`w-full h-[44%] bg-gradient-to-t from-slate-950 to-transparent`} />
                <div className={`w-full h-[12%] ${getAccent(5, 'bg')}`} />
                <div className={`w-full h-[44%] bg-gradient-to-b from-slate-950 to-transparent`} />
            </div>
            {getSvg(2)}
            
            <div className="absolute flex flex-col items-center justify-center
                 h-40 w-36">
                {things[1]}
            </div>
        </div>
    )
}

export default ThingsCarousel