import Link from "next/link";
import React from "react";
import { BiLinkExternal } from 'react-icons/bi';

interface ModalProps {
  ModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  selectedProject: any;
}

const Modal: React.FC<ModalProps> = ({ ModalOpen, setModalOpen, selectedProject }) => {
  if (!selectedProject) {
    return (
      <dialog id="my_modal_3" className={`modal ${ModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <p>Erreur de chargement lors de l'ouverture du projet</p>
        </div>
      </dialog>
    );
  }

  return (
    <dialog id="my_modal_3" className={`modal ${ModalOpen ? "modal-open" : ""}`}>
      <div className="modal-box max-w-full w-3/4 sm:w-1/2 lg:w-1/2 z-[60]">
        <button onClick={() => setModalOpen(false)} className="btn btn-circle btn-ghost absolute text-4xl right-2 top-2">
          ✕
        </button>
        <img className="mx-auto w-100" src={`/images/projects/${selectedProject.img}`} alt={selectedProject.name} />
        <div className="card-body">
          <h2 className="card-title">
            {selectedProject.name}
          </h2>
          <p>{selectedProject.description}</p>
          <div className="card-actions justify-between mt-5">
            <div className="justify-start">
              {selectedProject.technos.map((element, index) => (
                <div key={index} className="badge badge-outline mr-3">{element}</div>
              ))}
            </div>
            <div className="underline underline-offset-4 decoration-1 hover:decoration-2">
              {selectedProject.url !== null && (
                <Link rel="nofollow" target="_blank" href={selectedProject.url}> <BiLinkExternal className="transition-transform hover:scale-125" cursor="pointer" size={25}/></Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
