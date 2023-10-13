import React from "react";
import LanguagesData from "@/data/projects.json";

const Projets = () => {
  const data = LanguagesData;


  return (
    <div className="min-h-full flex flex-wrap place-content-around">
      { data.map((element, index) => (
        <div key={index} className="rounded-xl h-[200px] w-[300px] md:w-[220px] lg:w-[300px] flex flex-col-reverse group">
          <div className={`bg-cover bg-center bg-[url(/images/technos/${element.img}.png)] flex flex-col-reverse rounded-xl h-full w-full transition-transform transform scale-100 group-hover:scale-105`}>
            <h2 className="m-6 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              {element.img}
            </h2>
          </div>
        </div>
        ))}
    </div>
  );
};

export default Projets;
