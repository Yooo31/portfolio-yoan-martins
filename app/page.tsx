'use client';
import { useState } from 'react';
import Accueil from '@/app/components/Accueil';
import Projets from '@/app/components/Projets';
import TopLeft from '@/app/components/TopLeft';
import BottomRight from '@/app/components/BottomRight';
import Technos from '@/app/components/Technos';
import Contact from '@/app/components/Contact';

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState('Accueil');

  return (
    <div className="block box-border fixed top-0 bottom-0 left-0 right-0 overflow-y-auto">
      <div className="h-full box-border flex justify-center items-start md:h-screen md:max-h-screen md:items-center md:overflow-hidden">
        <div className="w-screen max-w-[1280px] box-border mt-0 mb-0 p-7 flex relative md:max-h-[790px] h-screen md:h-full sm:h-screen sm:p-[20px]">
          <TopLeft setSelectedComponent={setSelectedComponent} />

          <h1 className='m-0 -rotate-90 absolute bottom-0 left-0 origin-bottom-left text-[100px] translate-x-1/4 hidden lg:block md:block'>{ selectedComponent }</h1>

          <main className="w-9/12 m-auto h-full flex items-center z-10">
            {selectedComponent === 'Accueil' && <Accueil />}
            {selectedComponent === 'Technos' && <Technos />}
            {selectedComponent === 'Projets' && <Projets />}
            {selectedComponent === 'Contact' && <Contact />}
          </main>

          <BottomRight />
        </div>
      </div>
    </div>
  )
}
