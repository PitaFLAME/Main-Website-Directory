import StackIcon from "tech-stack-icons"


const icons = [
    "git", "vscode", "dart", "flutter", "typescript", "js", "nextjs", "python", "swift",
     "java", "c++", "csharp", "mongodb", "mysql", "html5", "css3", "tailwindcss", "figma",
      "ps", "ai", "digitalocean", "framer"
]


const getIcons = () => {
    return icons.map((icon, i) => ( <div key={i} className="relative -mb-3">
                                        <StackIcon key={i} name={icon} />
                                        <div className="absolute bg-zinc-800 opacity-60 hover:opacity-10 h-full w-full top-0" />
                                    </div>
     )); 
}


const content = [
    (   <div key={0}>
            <h2>Hi, my name is <span>Pita</span></h2>
            <p>I do a lot of <span>things</span></p>
        </div> ), ( <div key={1}>
            <h2>Education</h2>
            <h3>Arizona State University</h3>
            <p>Bachelor&apos;s in Software Engineering</p>
            <h3>Cosumnes River College</h3>
            <p>Bachelor&apos;s in Computer Science</p>
        </div> ), ( <div key={2} className="px-8 pt-4">
            <h2 className="text-2xl font-semibold mb-0.5">Technologies I use</h2>
            <div className="w-full h-2 bg-gradient-radial from-zinc-900 to-transparent">
                <div className="w-full h-2 bg-gradient-to-b from-zinc-900 to-transparent mb-4" /></div>
            <div className="relative grid grid-cols-4 gap-6 mt-2">
                {getIcons()}
            </div>
            
        </div> ), ( <div key={3} className="flex flex-col justify-center items-center">
            <img src="https://via.placeholder.com/800x400" alt="placeholder" />
            <h1>Pita Sherwood</h1>
        </div> ),
        

]


export const getContent = (contentID: number) => {
    return content[contentID]
}

