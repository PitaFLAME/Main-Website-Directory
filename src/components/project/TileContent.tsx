

import Image from 'next/image'
import { getSvg } from '../SvgData'


const content = [
    (             <div key={0} className="relative w-full h-full mt-2">
            {getSvg(3, 9, "w=[110%] mt-8")}


        </div>), (<div key={1} className="flex justify-center h-full w-full" >
            {getSvg(5, 6, "h-[100%] p-4")}


        </div>), (<div key={2} className="h-full" >
            {getSvg(4, 6, "h-[100%] py-3 ml-auto mr-8")}


        </div>), (<div key={3} className="h-full" >
            {getSvg(6, 9, "h-[100%] py-2 ml-auto mr-12")}


        </div>)
]


export const getContent = (contentID: number) => {
    return content[contentID]
}