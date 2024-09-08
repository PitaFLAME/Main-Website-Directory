import { ReferrerEnum } from "next/dist/lib/metadata/types/metadata-types"
import Link from "next/link"
import { getAccent, getSize } from "./Globals";


const ContentTile = ({accentID, render, linkTo, sizeType, orientation}:{
    render?: React.ReactNode,
    accentID: number | [number, number],
    linkTo?: string,
    sizeType?: number,
    orientation?: number,
    
}) => {
    const size = sizeType ? getSize(sizeType) : ['row-span-1','col-span-1', null];
    
    const accent = Array.isArray(accentID) ? `bg-gradient ${getAccent(accentID[0], 'from')} ${getAccent(accentID[1], 'to')}` 
        :  `${getAccent(accentID, 'bg')}`

    return (
        <div className={`h-full
            ${size[0]} ${size[1]}
            `}>
            <div className={`${accent} rounded-xl w-full h-full overflow-hidden`}>
                {render}
            </div>
        </div>
    )
}

export default ContentTile

