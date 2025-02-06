import Image from "next/image";
import LanguagesData from "@/data/languages.json";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Technos = () => {
  const data = LanguagesData;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 10,
    });
  }, []);

  return (
    <div
      id="languages-list"
      data-aos="zoom-in-up"
      className="z-40 h-5/6 flex justify-center h-full"
    >
      <div className="flex flex-wrap -mx-4">
        {data.map((element, index) =>
          element.display ? (
            <div
              key={index}
              className="w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4 flex justify-center"
            >
              <Image
                src={`/images/technos/${element.img}.svg`}
                alt={element.name}
                width={150}
                height={150}
              />
            </div>
          ) : null,
        )}
      </div>
    </div>
  );
};

export default Technos;
