import { ResponsiveText } from "@/utils/getSize";
import { getAccent } from "./Globals";



const Reader = ({readerID}:{
  readerID: number;
}) => {

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
                Software Engineering&nbsp;<span className={getAccent(5, 'text')}>- Bachelor's</span>
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
              Computer Science&nbsp;<span className={getAccent(5, 'text')}>- Bachelor's</span>
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


      {/*<div className={`grid grid-cols-3 w-full h-[45%] mt-[4%] rounded-xl gap-[3%] p-[3%] ${getAccent(10, 'bg')}`}>
        <div className="flex w-full h-full bg-gradient-to-b from-gray-800/20 to-gray-900/30 rounded-lg col-span-2">

        </div>
        <div className="flex w-full h-full bg-gradient-to-b from-gray-800/20 to-gray-900/30 rounded-lg">

        </div>
      </div>*/}

    </>), (<>
      <ResponsiveText type={1} size={0.6}>
        Hello, Luigi
      </ResponsiveText>
    </>),

  ]


  return readers[readerID] 
}

export default Reader