"use client"

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import PartyTime from '@/components/party-mode/PartyButton';
import ContentSelector from '@/components/ContentSelector';
import HomeContent from '@/components/Home/HomeContent';
import { PageProvider, usePageContext } from '@/components/PageContext';


export default function Home() {

  const { activePage } = usePageContext()

  return (
    <PageProvider>
      <main className="bg-slate-950">

        <MaxWidthWrapper className='relative flex flex-col justify-center items-center h-screen'>
          { activePage === 0 ? <HomeContent />
          : activePage === 1 ? <></>
          : activePage === 2 ? <></>
          : <></>
          }
          <ContentSelector />

          <PartyTime />
        </MaxWidthWrapper>

      </main>
    </PageProvider>
  );
}
