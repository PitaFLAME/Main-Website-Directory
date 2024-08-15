'use client'

import { PartyPopper } from "lucide-react"
import { useState } from "react";



const PartyTime = () => {
    const [isEngaged, setIsEngaged] = useState(false);

    const engagePartyMode = () => {
        setIsEngaged(!isEngaged);
      };

    return (
        <div className='absolute bottom-12 right-8 w-12 h-12'>
          <PartyPopper className="absolute h-8 w-8 opacity-5" title="Party Mode!" />
          <input type="checkbox" className='absolute h-8 w-8 opacity-0' />
        </div>

    )
}

export default PartyTime