


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

const accents = [
    ['-slate-100', '-slate-200', '-slate-700', '-slate-800', '-slate-900'],
    ['-zinc-100', '-zinc-200', '-zinc-700', '-zinc-800', '-zinc-900'],
    ['-teal-100', '-teal-200', '-teal-700', '-teal-800', '-teal-900'],
    ['-blue-100', '-blue-200', '-blue-700', '-blue-800', '-blue-900'],
]


export const getAccent = (accentID: number, prefix: string) => {
    return prefix + accents[getColorProfile()][accentID]
}

export const getSize = (sizeType: number) => {
    return [sizeWMap[sizeType], sizeHMap[sizeType]]
}
const getColorProfile = () => {
    return 0
}