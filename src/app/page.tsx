import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Tile from '../components/Tile';
import { getContent } from '@/components/TileContent';
import { PartyPopper } from 'lucide-react';
import PartyTime from '@/components/party-mode/PartyButton';


export default function Home() {
  return (
    <main className="bg-slate-950">

      <MaxWidthWrapper className='relative flex items-center h-screen'>
        <div className="grid 
          grid-cols-8 grid-rows-8
          md:grid-cols-12 md:grid-rows-12
          h-[70vh] w-full gap-2">
          
          <Tile sizeType={8} accentID={4} render={getContent(0)} />
          <Tile sizeType={7} accentID={3} render={getContent(4)} />
          <Tile sizeType={11} accentID={4} />
          <Tile sizeType={3} accentID={3} render={getContent(5)} />
          
          <Tile sizeType={5} accentID={4} render={getContent(3)} />

          <Tile sizeType={7} accentID={3} render={getContent(2)} />
          <Tile sizeType={9} accentID={2} />
          <Tile sizeType={8} accentID={[3,2]} render={getContent(1)} />
          

        </div>

        <PartyTime />
      </MaxWidthWrapper>

    </main>
  );
}
