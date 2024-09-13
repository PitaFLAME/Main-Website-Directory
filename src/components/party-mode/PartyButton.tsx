'use client'

import { PartyPopper } from "lucide-react"
import { useState } from "react";



const PartyTime = () => {
    const [isEngaged, setIsEngaged] = useState(false);

    const engagePartyMode = () => {
        setIsEngaged(!isEngaged);
      };

    return (
        <div className="absolute flex justify-center items-center bottom-12 right-8 w-12 h-12
              group hover:bg-zinc-300 rounded-full opacity-50">
          <PartyPopper className="absolute h-8 w-8 opacity-5 z-40 group group-hover:text-zinc-700 group-hover:opacity-100" />
          <input type="checkbox" className='absolute h-8 w-8 opacity-0' />
        </div>

    )
}

export default PartyTime