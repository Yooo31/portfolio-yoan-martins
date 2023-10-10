import Info from '@/app/components/Info';
import TopLeft from '@/app/components/TopLeft';
import BottomRight from '@/app/components/BottomRight';

export default function Home() {
  return (
    <div className="block box-border fixed top-0 bottom-0 left-0 right-0 overflow-y-auto">
      <div className="h-full box-border flex justify-center items-start md:h-screen md:max-h-screen md:items-center md:overflow-hidden">
        <div className="w-screen max-w-[1280px] box-border mt-0 mb-0 p-7 flex relative md:max-h-[790px] md:h-full sm:p-[20px]">
          <TopLeft />

            <main className="w-9/12 m-auto h-full">
              <Info />
            </main>

          <BottomRight />
        </div>
      </div>
    </div>
  )
}
