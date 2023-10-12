import Image from 'next/image';
import LanguagesData from "@/data/languages.json";

const Technos = () => {
  const data = LanguagesData;

  return (
    <>
    <div id="languages-list" className="h-5/6 flex justify-center">
      <div className="flex flex-wrap -mx-4">
        { data.map((element, index) => (
          <div key={index} className="w-1/4 px-4 mb-4 flex justify-center">
            <Image  src={`/images/technos/${element.img}.svg`} alt={element.name} width={150} height={150}/>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Technos;
