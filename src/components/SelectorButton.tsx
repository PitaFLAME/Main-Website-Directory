"use client"

import { useState } from "react";
import { usePageContext } from "./PageContext";


const SelectorButton = ({text, id}:{
    text: string
    id: number
}) => {

    const [isHovered, setHovered] = useState(false);
    const { activePage, setActivePage } = usePageContext()
    const active = activePage === id

    return (
        <>
            <p className={`text-white z-30 text-sm group cursor-pointer`}
                onMouseEnter={() => {setHovered(true)}}
                onMouseLeave={() => {setHovered(false)}}
                onClick={() => {setActivePage(id)}}>
                    {text}
            </p>
            <div className={`absolute h-full w-full rounded-lg
                ${active ? "bg-gradient-to-br from-slate-600 to-slate-700" : 
                    isHovered ? "bg-slate-800" : "bg-gradient-to-br from-slate-900 to-slate-950"}`}
                onMouseEnter={() => {setHovered(true)}}
                onMouseLeave={() => {setHovered(false)}}
                onClick={() => {setActivePage(id)}} />
        </>
    )
}

export default SelectorButton