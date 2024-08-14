import Link from "next/link"


const ContentTile = ({accentID, children, linkTo}:{
    accentID?: number,
    children?: React.ReactNode
    linkTo?: string
}) => {


    return (
        <div className="h-full">
            <Link href={linkTo ? linkTo : ""}>
                <div className={`bg-white rounded-xl w-full h-full text-black`}>
                    Tile
                </div>
            </Link>
        </div>    
    )
}

export default ContentTile