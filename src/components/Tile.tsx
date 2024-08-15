import { ReferrerEnum } from "next/dist/lib/metadata/types/metadata-types"
import Link from "next/link"
import { getAccent, getHSize, getWSize } from "./Globals";


const ContentTile = ({accentID, render, linkTo, sizeType}:{
    render?: React.ReactNode,
    accentID?: number,
    linkTo?: string,
    sizeType?: number,

    
}) => {
    const sizeH = sizeType ? getHSize(sizeType) : 'row-span-1';
    const sizeW = sizeType ? getWSize(sizeType) : 'col-span-1';
    const accent = accentID ? `${getAccent(accentID)}` : `${getAccent(0)}`;

    return (
        <div className={`h-full
            ${sizeH} ${sizeW}
            `}>
            <div className={`${accent} rounded-xl w-full h-full overflow-hidden`}>
                {render}
            </div>
        </div>
    )
}

export default ContentTile

