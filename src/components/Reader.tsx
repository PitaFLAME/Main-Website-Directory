import { ResponsiveText, useMedallionSize } from "@/utils/getSize";
import { getAccent } from "./Globals";
import { useState } from "react";
import { getSvg } from "./SvgData";
import { useMemo } from "react";



const Reader = ({readerID}:{
  readerID: number;
}) => {

  const [selector, setSelector] = useState<number>(0);
  const [override, setOverride] = useState<number>(0);

  const StackImage = ({image, id}:{
    image: number;
    id: number;
  }) => {

    const medallionSize = useMedallionSize();
    const height = useMemo(() => medallionSize * 80, [medallionSize])

    console.log(height)
    return (
      <div className={`flex justify-center w-full ${override === 0 ? "hover:scale-125" : ""} transition-transform duration-200 
                      ${override === id ? "scale-125" : ""}`}
           style={{height: height}}
           onMouseEnter={() => setSelector(id)}
           onClick={() => setOverride(id)}
           onMouseLeave={() => setSelector(0)}>
        {getSvg(image, 5, "h-full")}
      </div>
    )
  }

  const StackImageDescription = ({id, title, children}:{
    id: number;
    title: string;
    children?: React.ReactNode;
  }) => {

    return (
      <div className={`absolute flex flex-col items-center px-[4%] transition-transform duration-400 
           ${(selector === id  && override === 0) || override === id ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveText type={1} size={0.6}>{title}</ResponsiveText>
        <ResponsiveText type={1} size={0.5} className={`${getAccent(4, 'text')} text-center`}>
          {children}
        </ResponsiveText>
      </div>
    )
  }


  const readers = [
    (<></>),
    (<>
      <ResponsiveText type={1} size={1.2} className={`${getAccent(6, 'text')}`}>
        Education & Certifications
      </ResponsiveText>
      <div className="flex flex-row mt-[2%]">
        <div className={`${getAccent(7, 'bg')} w-[0.2%] rounded-lg mr-[5%] ml-[0.1%] `} />
        <div className="flex flex-col w-full">
          <div className="flex flex-row">
          
            <div>
              <ResponsiveText type={2} size={0.6} className="">
                Arizona State University&nbsp;
                <span className={getAccent(6, 'text')}>- GPA: 3.33</span>
              </ResponsiveText>
              <ResponsiveText type={0} size={0.5} className="indent-[4%]">
                Software Engineering&nbsp;<span className={getAccent(5, 'text')}>- Bachelor&apos;s</span>
              </ResponsiveText>
            </div>
          </div>
          <div className="flex flex-row w-full">
            {/*<div className={`${getAccent(7, 'bg')} w-[0.2%] rounded-lg mr-[2%] ml-[7%]`} />*/}
            <div className="w-full ml-[7%] mb-[1%]">
            <ResponsiveText type={2} size={0.5} className={getAccent(5,'text')}>
              Extracurriculars
            </ResponsiveText>
            <ResponsiveText type={0} size={0.5} className="ml-[2%]">
              CodeDevils&nbsp;<span className={getAccent(5, 'text')}>- Technical Project Manager</span>
            </ResponsiveText>
            <ResponsiveText type={0} size={0.5} className="ml-[2%]">
              ACM Student Chapter @ ASU&nbsp;<span className={getAccent(5, 'text')}>- Committee Chair, Engineering</span>
            </ResponsiveText>
            </div>
          </div>
          <div className="flex flex-row mt-[2%]">
            <div>
            <ResponsiveText type={2} size={0.6} className="">
              Cosumnes River College&nbsp; <span className={getAccent(6, 'text')}>- GPA: 3.00</span>
            </ResponsiveText>
            <ResponsiveText type={0} size={0.5} className="indent-[4%]">
              Computer Science&nbsp;<span className={getAccent(5, 'text')}>- Bachelor&apos;s</span>
            </ResponsiveText>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="flex flex-row mt-[8%]">
        <div className={`${getAccent(7, 'bg')} w-[0.2%] rounded-lg mr-[5%] ml-[0.1%] `} />
        <div>
        <ResponsiveText type={2} size={0.6} className="">
          CompTIA Network+ &nbsp;<span className={getAccent(6, 'text')}>(N10-008)</span>
        </ResponsiveText>
        <ResponsiveText type={0} size={0.5} className={`indent-[4%] ${getAccent(5, 'text')}`}>
          August 2022
        </ResponsiveText>
        <ResponsiveText type={2} size={0.6} className="mt-[1%]">
          fCC Responsive Web Design &nbsp;<span className={getAccent(6, 'text')}></span>
        </ResponsiveText>
        <ResponsiveText type={0} size={0.5} className={`indent-[4%] ${getAccent(5, 'text')}`}>
          June 2024
        </ResponsiveText>
        <ResponsiveText type={2} size={0.6} className="mt-[1%]">
          Google Certified IT Professional&nbsp;<span className={getAccent(6, 'text')}>(A+ equivalent)</span>
        </ResponsiveText>
        <ResponsiveText type={0} size={0.5} className={`indent-[4%] ${getAccent(5, 'text')}`}>
          November 2020
        </ResponsiveText>
        </div>
      </div>


    </>), (<>
      <ResponsiveText type={1} size={1.2} className={`${getAccent(6, 'text')}`}>
        My Technologies
      </ResponsiveText>
      <div className="grid grid-cols-6 w-full mt-[3%] gap-1 md:gap-2.5 lg:gap-4">

        <StackImage image={31} id={1} />  {/* VS Code */}
        <StackImage image={18} id={2} />  {/* Git */}
        <StackImage image={21} id={3} />  {/* Java */}
        <StackImage image={10} id={4} />  {/* C++ */}
        <StackImage image={11} id={5} />  {/* C# */}
        <StackImage image={26} id={6} />  {/* Python */}

        <StackImage image={30} id={7} />  {/* TypeScript */}
        <StackImage image={24} id={8} />  {/* Next.js */}
        <StackImage image={27} id={9} /> {/* React */}
        <StackImage image={29} id={10} /> {/* TailwindCSS */}
        <StackImage image={22} id={11} /> {/* MongoDB */}
        <StackImage image={23} id={12} />  {/* MySQL */}

        <StackImage image={20} id={13} /> {/* JavaScript */}
        <StackImage image={19} id={14} /> {/* HTML */}
        <StackImage image={12} id={15} /> {/* CSS */}
        <StackImage image={13} id={16} /> {/* Dart */}
        <StackImage image={16} id={17} /> {/* Flutter */}
        <StackImage image={28} id={18} /> {/* Swift */}

        <StackImage image={14} id={19} /> {/* DigitalOcean */}
        <StackImage image={17} id={20} /> {/* Framer */}
        <StackImage image={15} id={21} /> {/* Figma */}
        <StackImage image={25} id={22} /> {/* Photoshop */}
        <StackImage image={9} id={23} />  {/* Illustrator */}

      </div>
      <div className={`absolute top-0 w-full h-[80%] ${override === 0 ? "hidden" : ""}`} 
           onClick={() => setOverride(0)}/>
      <div className={`absolute flex justify-center w-full h-[20%] bottom-[4%] py-[2%] rounded-2xl ${getAccent(10, 'bg')}`}>
        <StackImageDescription id={1} title="Visual Studio Code">
          Home, in a lot of senses. I do the majority of my work in this text editor. The extensions available for this tool are a strong draw for me.
        </StackImageDescription>
        <StackImageDescription id={2} title="Git">
          I run my organization through GitHub and deploy through GitHub. I like to think I have a very good understanding of GitFlows and work via Git.
        </StackImageDescription>
        <StackImageDescription id={3} title="Java">

        </StackImageDescription>
        <StackImageDescription id={4} title="C++">

        </StackImageDescription>
        <StackImageDescription id={5} title="C#">

        </StackImageDescription>
        <StackImageDescription id={6} title="Python">

        </StackImageDescription>
        <StackImageDescription id={7} title="TypeScript">

        </StackImageDescription>
        <StackImageDescription id={8} title="Next.js">

        </StackImageDescription>
        <StackImageDescription id={9} title="React">

        </StackImageDescription>
        <StackImageDescription id={10} title="TailwindCSS">

        </StackImageDescription>
        <StackImageDescription id={11} title="MongoDB">

        </StackImageDescription>
        <StackImageDescription id={12} title="MySQL">

        </StackImageDescription>
        <StackImageDescription id={13} title="JavaScript">

        </StackImageDescription>
        <StackImageDescription id={14} title="HTML">

        </StackImageDescription>
        <StackImageDescription id={15} title="CSS">

        </StackImageDescription>
        <StackImageDescription id={16} title="Dart">

        </StackImageDescription>
        <StackImageDescription id={17} title="Flutter">

        </StackImageDescription>
        <StackImageDescription id={18} title="Swift">

        </StackImageDescription>
        <StackImageDescription id={19} title="DigitalOcean">

        </StackImageDescription>
        <StackImageDescription id={20} title="Framer">

        </StackImageDescription>
        <StackImageDescription id={21} title="Figma">

        </StackImageDescription>
        <StackImageDescription id={22} title="Adobe Photoshop">

        </StackImageDescription>
        <StackImageDescription id={23} title="Adobe Illustrator">

        </StackImageDescription>

      </div>



    </>),

  ]


  return readers[readerID] 
}

export default Reader