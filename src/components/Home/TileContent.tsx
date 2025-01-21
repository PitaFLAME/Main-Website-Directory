"use client"


import { getSvg } from "../SvgData";
import { getAccent } from "../Globals";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Circle, Quote } from "lucide-react";
import React, { useRef } from "react";
import { ResponsiveText, useMedallionSize } from "@/utils/getSize";
import { usePageContext } from "../Context/PageContext";


const icons = [
    "git", "vscode", "dart", "flutter", "typescript", "js", "nextjs", "python", "swift",
     "java", "c++", "csharp", "mongodb", "mysql", "html5", "css3", "tailwindcss", "figma",
      "ps", "ai", "digitalocean", "framer"
]

const TileContent = ({contentID, back}:{
    contentID: number;
    back?: boolean;
}) => {


    const { activeReader, setActiveReader } = usePageContext();
    const medallionSize = useRef(0);
    medallionSize.current = useMedallionSize();
    
    const getMedallionSize = ({px}:{
        px: number;
    }) => {
        return {
            width: `${medallionSize.current * px}px`,
            height: `${medallionSize.current * px}px`
        }
    }


    const content: {
        front: React.ReactNode;
        back?: React.ReactNode;
    }[] = [{ front: (
            <div key={0} className="flex flex-col items-center justify-center w-full h-full">
                <ResponsiveText type={2} size={1}
                                className={`${getAccent(2, 'text')} font-expletus_sans`}>
                    Hi, my name is&nbsp;&nbsp;
                    <span className="text-[240%] font-allison text-slate-200">Pita</span>
                </ResponsiveText>
                
            </div> )}, { front: ( <div key={1} className="relative flex flex-row items-center group p-[6%] h-full w-full" >

                    {/* Hit box for click */}
                    <div className="absolute group w-[60%] h-[90%] cursor-pointer right-0 z-20"
                        onClick={() => setActiveReader(1)} />

                        <div className="grid grid-cols-1 ml-auto"
                            style={getMedallionSize({px: 240})}>
                            <Circle className={`w-full h-full ${getAccent(8, 'text')} row-start-1 col-start-1`} />
                            {getSvg(7, 8, "w-full h-full p-[11%] row-start-1 col-start-1")}
                        </div>
                        <ChevronRight className={`${getAccent(8, 'text')} ${getAccent(6, 'group-hover:text')}`} 
                                    style={getMedallionSize({px: 110})} />

                    </div> ), back: (
                        <div className="flex items-center w-full h-full cursor-pointer" 
                            onClick={() => setActiveReader(0)}>
                            <ChevronLeft className={`${getAccent(8, 'text')} ml-auto`}
                                         style={getMedallionSize({px:110})} />
                        </div>
                )}, { front: ( <div key={2} className="flex flex-col px-[8%] py-[10%] justify-end items-center h-full w-full group">
                    {/* Hit box for click */}
                    <div className="absolute w-[80%] h-[70%] group cursor-pointer bottom-0"
                        onClick={() => setActiveReader(2)} />

                    <div className="grid columns-1"
                        style={getMedallionSize({px: 240})}>
                        <Circle className={`h-full w-full ${getAccent(7, 'text')} row-start-1 col-start-1`} />
                        <div className="flex justify-center items-center col-start-1 row-start-1">
                            {getSvg(8, 7,  `w-full h-full m-[21%]`)}
                        </div>
                    </div>
                </div> ), back: (
                    <div className="flex justify-center w-full h-full cursor-pointer" 
                            onClick={() => setActiveReader(0)}>
                        <ChevronDown className={`${getAccent(8, 'text')} mb-auto`}
                                        style={getMedallionSize({px:110})} />
                    </div>
                )}, { front: ( <div key={3} className="relative flex flex-col justify-center items-center h-full gap-4 group">
                <div className="absolute w-24 -top-4 right-4"
                     style={getMedallionSize({px: 90})} >
                    {getSvg(0, 8)}
                </div>
                
                <img src="https://avatars.githubusercontent.com/u/171903351?v=4"
                    alt="GitHub Profile"
                    className={`rounded-full border-4 lg:border-8 ${getAccent(8, 'border')}
                    transition-transform duration-500 ease-out transform group-hover:scale-105`}
                    style={getMedallionSize({px: 220})}
                        />

            </div> )}, { front: ( <div key={4} className="relative flex justify-center items-center w-full h-full">
                <img src="/assets/space.jpg" className="absolute w-full h-full object-cover" />
                <div className="absolute z-10 mb-[2vw] w-[90%]">
                    <Quote className="w-[2.4vw] h-[2.4vw] max-w-10 max-h-10 fill-sky-500 text-sky-400" />
                    <ResponsiveText type={2} size={0.88} className="text-center font-semibold mt-[1.2vw] leading-normal font-poppins" >
                        Sometimes, through the noise of its thoughts, it hears the universe.
                    </ResponsiveText>
                    <Quote className="w-[2.4vw] h-[2.4vw] max-w-10 max-h-10 fill-sky-500 text-sky-400 ml-auto mt-[0.4vw]" />
                    <ResponsiveText type={3} size={0.5} className="text-white font-poppins text-right mt-[0.8vw] mr-[0.8vw]">
                        - Julian Gough
                    </ResponsiveText>
                </div>
                
            </div> )}, { front: ( <div key={5} className="relative w-full h-full">
                { getSvg(1, 10, "lg:h-72 lg:w-72 h-32 w-32 object-cover") }
                
            </div> )}, { front: ( <div key={6} className="w-full h-full" >
                <h2>Full </h2>
            </div> )}
    ]

    return back ? content[contentID].back : content[contentID].front;
}

export const getContent = (contentID: number, back?: boolean) => {
    return (<TileContent contentID={contentID} back={back} />)
}

