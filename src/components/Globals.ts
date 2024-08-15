import { getColorProfile } from "./GenerateParty";


const sizeHMap: { [key: number]: string } = {
    1: 'row-span-1',
    2: 'row-span-1',
    3: 'row-span-2',
    4: 'row-span-2',
    5: 'row-span-4',
    6: 'row-span-4',
    7: 'row-span-6',
    8: 'row-span-4',
    9: 'row-span-2',
    10: 'row-span-4',
    11: 'row-span-2',
};

const sizeWMap: { [key: number]: string } = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-1',
    4: 'col-span-2',
    5: 'col-span-4',
    6: 'col-span-6',
    7: 'col-span-4',
    8: 'col-span-8',
    9: 'col-span-4',
    10: 'col-span-2',
    11: 'col-span-3',
};
/* 1=1x1 2=1x2 3=2x1 4=2x2 5=4x4 6=4x6 7=6x4
8=8x4 9=2x4 10=4x2 11=2x3 12:*/

const accentMap: { [key: number]: string }[] = [
    {0: 'bg-slate-500', 1: 'bg-slate-600', 2: 'bg-slate-700', 3: 'bg-slate-800', 4: 'bg-slate-900'},
    {0: 'bg-zinc-500', 1: 'bg-zinc-600', 2: 'bg-zinc-700', 3: 'bg-zinc-800', 4: 'bg-zinc-900'},
    {0: 'bg-teal-500', 1: 'bg-teal-600', 2: 'bg-teal-700', 3: 'bg-teal-800', 4: 'bg-teal-900'},
    {0: 'bg-blue-500', 1: 'bg-blue-600', 2: 'bg-blue-700', 3: 'bg-blue-800', 4: 'bg-blue-900'},
]


export const getAccent = (accentID: number) => {
    return accentMap[getColorProfile()][accentID]
}

export const getHSize = (sizeType: number) => {
    return sizeHMap[sizeType]
}

export const getWSize = (sizeType: number) => {
    return sizeWMap[sizeType]
}

