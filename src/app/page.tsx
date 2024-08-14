import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ContentTile from '../components/ContentTile';


export default function Home() {
  return (
    <main>

      <MaxWidthWrapper className='flex items-center h-screen'>
        <div className="grid grid-cols-2 md:grid-cols-3 h-[70vh] w-full gap-2">
          <ContentTile />
          <ContentTile />
          <ContentTile />
          
          <ContentTile />
          <ContentTile />
          <ContentTile />
          
          <ContentTile />
          <ContentTile />
          <ContentTile />

        </div>
      </MaxWidthWrapper>

    </main>
  );
}
