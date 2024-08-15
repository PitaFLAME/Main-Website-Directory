import StackIcon from "tech-stack-icons"
import Image from "next/image"
import { getSvg } from "./SvgData";
import { getAccent } from "./Globals";
import { get } from "http";

const icons = [
    "git", "vscode", "dart", "flutter", "typescript", "js", "nextjs", "python", "swift",
     "java", "c++", "csharp", "mongodb", "mysql", "html5", "css3", "tailwindcss", "figma",
      "ps", "ai", "digitalocean", "framer"
]


const getIcons = () => {
    return icons.map((icon, i) => ( <div key={i} className="relative flex items-center justify-center -mb-3 group">
                                        <div className="absolute h-[180%] w-[180%] group" />
                                        <StackIcon key={i} name={icon} grayscale={false} />
                                        <div className={`absolute opacity-60 group-hover:opacity-10 h-full w-full top-0
                                            ${getAccent(3, 'bg')}`} />
                                    </div>
     )); 
}


const content = [
    (   <div key={0}>
            <h2 className={`${getAccent(1, 'text')}`}>Hi, my name is <span>Pita</span></h2>
            <p>I do a lot of <span>things</span></p>
        </div> ), ( <div key={1} className="relative h-full w-full" >
                <h2>Education</h2>
                <h3>Arizona State University</h3>
                <p>Bachelor&apos;s in Software Engineering</p>
                <h3>Cosumnes River College</h3>
                <p>Bachelor&apos;s in Computer Science</p>

        </div> ), ( <div key={2} className="px-8 pt-4">
            <h2 className="text-2xl font-semibold mb-0.5">Technologies I use</h2>
            <div className={`w-full h-2 bg-gradient-radial ${getAccent(4, 'from')} to-transparent`}>
                <div className={`w-full h-2 bg-gradient-to-b ${getAccent(4, 'from')} to-transparent mb-4`} /></div>
            <div className="relative grid grid-cols-4 gap-6 mt-2">
                {getIcons()}
            </div>
            
        </div> ), ( <div key={3} className="relative flex flex-col justify-center items-center h-full gap-4 group">
            <div className="absolute w-24 -top-4 right-4">
                {getSvg(0)}
            </div>

            <img src="https://avatars.githubusercontent.com/u/171903351?v=4"
                   alt="GitHub Profile"
                   className={`rounded-full w-48 h-48 border-8 ${getAccent(3, 'border')}
                   transition-transform duration-500 ease-out transform group-hover:scale-105`}
                    />

        </div> ), ( <div key={4}>
            <h2 className="">
                I will not die as I am.  I will live long enough to become somebody else.</h2>

        </div> ), ( <div key={5} className="relative w-full h-full">
            <img src="/assets/topography.svg" className="absolute object-cover h-full w-full" />
            
        </div> ), ( <div key={6} className="w-full h-full" >
            <img src="/assets/space.jpg" className="w-full h-full object-cover" />
        </div> )
        

]


export const getContent = (contentID: number) => {
    return content[contentID]
}

