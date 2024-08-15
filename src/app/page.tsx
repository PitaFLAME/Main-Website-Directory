import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Tile from '../components/Tile';
import { getContent } from '@/components/TileContent';
import { PartyPopper } from 'lucide-react';


export default function Home() {
  return (
    <main className="bg-slate-950">

      <MaxWidthWrapper className='relative flex items-center h-screen'>
        <div className="grid 
          grid-cols-8 grid-rows-8
          md:grid-cols-12 md:grid-rows-12
          h-[70vh] w-full gap-2">
          
          <Tile sizeType={8} accentID={4} render={getContent(0)} />
          <Tile sizeType={7} accentID={3} />
          <Tile sizeType={11} accentID={4} />
          <Tile sizeType={3} accentID={3} />
          
          <Tile sizeType={5} accentID={4} render={getContent(3)} />

          <Tile sizeType={7} accentID={3} render={getContent(2)} />
          <Tile sizeType={9} accentID={4} />
          <Tile sizeType={8} accentID={3} />
          

        </div>
        <div className='absolute bottom-12 right-8 w-12 h-12'>
          <PartyPopper className="absolute h-8 w-8 opacity-5" title="Party Mode!" />
          <input type="checkbox" className='absolute h-8 w-8 opacity-0' />
        </div>
      </MaxWidthWrapper>

    </main>
  );
}
