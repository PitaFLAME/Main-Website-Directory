

import Image from 'next/image'
import { getSvg } from '../SvgData'


const content = [
    (             <div key={0} className="mt-2">
            {getSvg(3, 9, "w-96 -ml-12 mt-8")}


        </div>), (<div key={1} className="" >
            {getSvg(5, 7, "p-8 h-[100%]")}


        </div>), (<div key={2} className="mt-2" >
            {getSvg(4, 7, "h-72 ml-auto mr-8")}


        </div>), (<div key={3}>
            {getSvg(6, 9, "h-72 mt-2 ml-auto mr-12")}


        </div>)
]


export const getContent = (contentID: number) => {
    return content[contentID]
}