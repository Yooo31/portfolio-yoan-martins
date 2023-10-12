import React, { useEffect, useState } from "react";
import LanguagesData from "@/data/languages.json";

const Technos = () => {
  const data = LanguagesData;

  return (
    <>
    <div className="flex justify-center m-72">
      { data.map((element, index) => (
        <div key={index}>
          <h2>{element.name}</h2>
          <h2>{element.img}</h2>
        </div>
      ))};
    </div>
    </>
  );
};

export default Technos;
