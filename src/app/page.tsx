"use client"

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import PartyTime from '@/components/PartyMode/PartyButton';
import ContentSelector from '@/components/ContentSelector';
import HomePage from '@/components/Home/HomePage';
import { PageProvider, usePageContext } from '@/components/PageContext';
import ProjectPage from '@/components/Project/ProjectPage';
import ContactPage from '@/components/contact/ContactPage';


const Page = () => {

  const { activePage } = usePageContext()

  return (
    <main className="bg-slate-950">

        <MaxWidthWrapper className='relative flex flex-col justify-center items-center h-screen'>
          { activePage === 0 ? <HomePage />
          : activePage === 1 ? <ProjectPage />
          : activePage === 2 ? <ContactPage />
          : <></> }
          <ContentSelector />

          <PartyTime />
        </MaxWidthWrapper>

      </main>
  )
}


export default function Home() {
  
  return (
    <PageProvider>
      <Page />
    </PageProvider>
  );
}
