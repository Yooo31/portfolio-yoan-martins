import Info from '@/app/components/Info';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import TopLeft from '@/app/components/TopLeft';
import BottomRight from '@/app/components/BottomRight';

export default function Home() {
  return (
    <div className="main">
      <div className="main-container">
        <div id="main-container-inner" className="main-container-inner">
          <TopLeft />

          <div className="inner-container">
            <Header />

            <main className="projects-overview"></main>

            <Footer />

          </div>

          <h1 className='m-0 -rotate-90 absolute bottom-0 left-0 text-[125px]'>Accueil</h1>

          <BottomRight />
        </div>
      </div>
    </div>
  )
}
