import SelectorButton from "./SelectorButton"


const ContentSelector = () => {

    const liStyles = "relative flex items-center justify-center"
    
    return (
        <div className="w-80 h-12 mt-16 bg-slate-900 rounded-full px-6 py-2" >
            
            <ul className="grid grid-rows-1 grid-cols-3 gap-2 h-full" >
                <li className={`${liStyles}`} >
                    <SelectorButton text={"Home"} id={0} />
                </li>
                <li className={`${liStyles}`} >
                    <SelectorButton text={"Projects"} id={1} />
                </li>
                <li className={`${liStyles}`} >
                    <SelectorButton text={"Contact"} id={2} />
                    
                </li>
            </ul>
            
        </div>
    )
}

export default ContentSelector