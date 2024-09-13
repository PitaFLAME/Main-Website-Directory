

import Image from 'next/image'


const content = [
    (   <div key={0} className="">
            <Image
                className="flex mt-4 ml-4"
                src="/assets/project-icons/CooldownsIcon.png"
                alt="Cooldowns Project Logo"
                width={120}
                height={120}

            />
        </div>), (<div key={1} className="relative" >
            <Image
                className="absolute right-4 top-12"
                src="/assets/project-icons/hnewsblue.png"
                alt="Cooldowns Project Logo"
                width={120}
                height={120}

            />
        </div>), (<div key={2} className="relative" >
            <Image
                className="flex mt-4 ml-4"
                src="/assets/project-icons/GoodBytesLogo.png"
                alt="Cooldowns Project Logo"
                width={120}
                height={120}

            />
        </div>), (<div key={3}>
            <Image
                className="flex mt-4 ml-4"
                src="/assets/project-icons/CDLogo.png"
                alt="Cooldowns Project Logo"
                width={200}
                height={200}

            />
        </div>)
]


export const getContent = (contentID: number) => {
    return content[contentID]
}