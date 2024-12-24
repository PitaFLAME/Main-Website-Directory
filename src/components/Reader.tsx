import { ResponsiveText } from "@/utils/getSize";
import { getAccent } from "./Globals";
import { useState } from "react";
import { getSvg } from "./SvgData";
import { px } from "framer-motion";





const Reader = ({readerID}:{
  readerID: number;
}) => {

  const [selector, setSelector] = useState<number>(0);
  const [override, setOverride] = useState<number>(0);

  const StackImage = ({image, id}:{
    image: number;
    id: number;
  }) => {
    return (
      <div className={`flex justify-center h-20 w-full ${override === 0 ? "hover:scale-125" : ""} transition-transform duration-200 
                      ${override === id ? "scale-125" : ""}`} 
           onMouseEnter={() => setSelector(id)}
           onClick={() => setOverride(id)}
           onMouseLeave={() => setSelector(0)}>
        {getSvg(image, 5, "h-full")}
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
        {
          (selector === 1  && override === 0) || override === 1 ?
          <div className="flex flex-col items-center px-[4%] transition-opacity duration-100">
            <ResponsiveText type={1} size={0.6}>Visual Studio Code</ResponsiveText>
            <ResponsiveText type={1} size={0.5} className={`${getAccent(4, 'text')} text-center`}>
              Home, in a lot of senses. I do the majority of my work in this text editor.  The extensions available 
              for this tool are a strong draw for me.
            </ResponsiveText>
          </div> :
          (selector === 2  && override === 0) || override === 2 ?
          <div className="flex flex-col items-center px-[4%] transition-opacity duration-100">
            <ResponsiveText type={1} size={0.6}>Git</ResponsiveText>
            <ResponsiveText type={1} size={0.5} className={`${getAccent(4, 'text')} text-center`}>
              I run my organization through GitHub and deploy through GitHub. I like to think I have a very good
              understanding of GitFlows and work via Git.
            </ResponsiveText>
          </div> :
          (selector === 3  && override === 0) || override === 3 ?  <div>3

          </div> :
          (selector === 4  && override === 0) || override === 4 ?  <div>4

          </div> :
          (selector === 5  && override === 0) || override === 5 ?  <div>5

          </div> :
          (selector === 6  && override === 0) || override === 6 ?  <div>6

          </div> :
          (selector === 7  && override === 0) || override === 7 ?  <div>7

          </div> :
          (selector === 8  && override === 0) || override === 8 ?  <div>8

          </div> :
          (selector === 9  && override === 0) || override === 9 ?  <div>9

          </div> :
          (selector === 10 && override === 0) || override === 10 ? <div>10

          </div> :
          (selector === 11 && override === 0) || override === 11 ? <div>11

          </div> :
          (selector === 12 && override === 0) || override === 12 ? <div>12

          </div> :
          (selector === 13 && override === 0) || override === 13 ? <div>13

          </div> :
          (selector === 14 && override === 0) || override === 14 ? <div>14

          </div> :
          (selector === 15 && override === 0) || override === 15 ? <div>15

          </div> :
          (selector === 16 && override === 0) || override === 16 ? <div>16

          </div> :
          (selector === 17 && override === 0) || override === 17 ? <div>17

          </div> :
          (selector === 18 && override === 0) || override === 18 ? <div>18

          </div> :
          (selector === 19 && override === 0) || override === 19 ? <div>19

          </div> :
          (selector === 20 && override === 0) || override === 20 ? <div>20

          </div> :
          (selector === 21 && override === 0) || override === 21 ? <div>21

          </div> :
          (selector === 22 && override === 0) || override === 22 ? <div>22

          </div> :
          (selector === 23 && override === 0) || override === 23 ? <div>23
            
          </div> :
          <></>
        }
      </div>



    </>),

  ]


  return readers[readerID] 
}

export default Reader