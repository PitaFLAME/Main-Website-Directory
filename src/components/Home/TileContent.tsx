"use client"


import StackIcon from "tech-stack-icons"
import { getSvg } from "../SvgData";
import { getAccent } from "../Globals";
import { ChevronRight, Circle, Quote } from "lucide-react";
import React from "react";

const icons = [
    "git", "vscode", "dart", "flutter", "typescript", "js", "nextjs", "python", "swift",
     "java", "c++", "csharp", "mongodb", "mysql", "html5", "css3", "tailwindcss", "figma",
      "ps", "ai", "digitalocean", "framer"
]


const getIcons = () => {
    return icons.map((icon, i) => ( <div key={i} className="relative flex items-center justify-center -mb-3 group">
                                        <div className="absolute h-[180%] w-[180%] group" />
                                        <StackIcon key={i} name={icon} grayscale={false} className="max-h-12 max-w-12" />
                                        <div className={`absolute opacity-60 group-hover:opacity-10 h-full w-full top-0
                                            ${getAccent(8, 'bg')}`} />
                                    </div>
     ));
}


const content = [
    (   <div key={0} className="flex flex-col items-center">
            <h2 className={`${getAccent(2, 'text')} text-3xl font-expletus_sans mt-24`}>
                Hi, my name is&nbsp;
                <span className="text-7xl ml-2 font-allison text-slate-200">Pita</span>
            </h2>
            

        </div> ), ( <div key={1} className="relative flex flex-row items-center group gap-4 p-6 h-full w-full" >
            <div className="grid columns-1 ml-auto">
                <Circle className={`h-56 w-56 ${getAccent(8, 'text')} row-start-1 col-start-1`} />
                {getSvg(7, 8, "w-44 h-44 row-start-1 col-start-1 ml-6 mt-6")}
            </div>
            <ChevronRight className={`w-24 h-24 -ml-6 ${getAccent(8, 'text')} ${getAccent(6, 'group-hover:text')}`} />

            {/*<div className={`h-full w-[1px] ml-2 ${getAccent(7, 'bg')}`} />
            <div className="flex flex-col w-full gap-2">
                <h2 className="text-3xl mb-2 font-extralight">Education</h2>
                <div className="flex flex-row w-full">
                    <div className="flex flex-col">
                        <h3 className={`text-xl ${getAccent(2, 'text')}`}>Arizona State University</h3>
                        <p className="ml-4 text-base font-extralight">Bachelor&apos;s in Software Engineering</p>
                    </div>
                    <p className={`ml-auto text-base ${getAccent(7, 'text')}`}>March 2023 - Present</p>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <h3 className={`text-xl ${getAccent(2, 'text')}`}>Cosumnes River College</h3>
                        <p className="ml-4 text-base font-extralight">Bachelor&apos;s in Computer Science</p>
                    </div>
                    <p className={`ml-auto text-base ${getAccent(7, 'text')}`}>August 2016 - January 2019</p>
                </div>
            </div>*/}

        </div> ), ( <div key={2} className="flex flex-col px-8 py-16 justify-end items-center h-full w-full">
            {/*<h2 className={`text-2xl mb-2.5 ml-2 font-poppins w-full ${getAccent(2, 'text')}`}>
                My Stack
            </h2>*/}

            <div className="grid columns-1">
                <Circle className={`h-56 w-56 ${getAccent(7, 'text')} row-start-1 col-start-1`} />
                <div className="flex justify-center col-start-1 row-start-1">
                    {getSvg(8, 7, "w-32 h-32 mt-12")}
                </div>
            </div>
            
            {/*<div className="relative grid grid-cols-4 gap-6 mt-3 max-w-68">
                {getIcons()}
            </div>*/}
            
        </div> ), ( <div key={3} className="relative flex flex-col justify-center items-center h-full gap-4 group">
            <div className="absolute w-24 -top-4 right-4">
                {getSvg(0, 8)}
            </div>
            
            <img src="https://avatars.githubusercontent.com/u/171903351?v=4"
                   alt="GitHub Profile"
                   className={`rounded-full w-48 h-48 border-8 ${getAccent(8, 'border')}
                   transition-transform duration-500 ease-out transform group-hover:scale-105`}
                    />

        </div> ), ( <div key={4} className="relative flex justify-center w-full h-full">
            <img src="/assets/space.jpg" className="absolute w-full h-full object-cover" />
            <div className="absolute z-10 mt-12 w-[90%]">
                <Quote className="w-10 h-10 fill-sky-500 text-sky-400" />
                <h2 className="text-center text-3xl font-semibold mt-4 leading-normal font-poppins" >
                    Sometimes, through the noise of its thoughts, it hears the universe.
                </h2>
                <Quote className="w-10 h-10 fill-sky-500 text-sky-400 ml-auto mt-2" />
                <h3 className="text-white font-poppins text-right mt-4 mr-4">
                    - Julian Gough
                </h3>
            </div>

        </div> ), ( <div key={5} className="relative w-full h-full">
            { getSvg(1, 10, "h-72 w-72 object-cover") }
            
        </div> ), ( <div key={6} className="w-full h-full" >
            <h2>Full </h2>
        </div> )
]


export const getContent = (contentID: number) => {
    return content[contentID]
}

