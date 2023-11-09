import React, { useEffect, useState } from "react";
import LanguagesData from "@/data/projects.json";
import Modal from "@/app/components/Modal";

import AOS from 'aos';
import 'aos/dist/aos.css';

interface Project {
  name: string;
  description: string;
  logo: string;
  img: string;
  technos: string[];
  url: string | null;
}

const Projets = () => {
  const data = LanguagesData;

  const [ModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>();

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 10,
    });
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = data.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(data.length / projectsPerPage);

  return (
    <div className="z-50 flex flex-col">
      <div data-aos="zoom-in-up" className="min-h-full flex flex-wrap place-content-around">
        {currentProjects.map((element, index) => (
          <div key={index} className="rounded-xl h-[200px] w-[300px] md:w-[220px] lg:w-[300px] my-6 flex flex-col-reverse group">
            <button className="h-full w-full" onClick={() => openModal(element)}>
              <div className="card w-full h-full bg-base-100 shadow-xl image-full">
                <figure><img className="group-hover:opacity-25 transition-opacity duration-500" src={`/images/projects/${element.logo}`} alt={element.name} /></figure>
                <div className="card-body flex-col-reverse">
                  <h2 className="card-title text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">{element.name}</h2>
                </div>
              </div>
            </button>
          </div>
        ))}

        <Modal ModalOpen={ModalOpen} setModalOpen={setModalOpen} selectedProject={selectedProject} />

      </div>
      <div className="z-[70] mt-10 ml-auto join">
        {Array.from({ length: totalPages }, (_, i) => (
          <button className={`transition-transform hover:scale-105 join-item btn btn-outline ${currentPage === i + 1 ? "btn-active" : ""}`} key={i} onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

export default Projets;
