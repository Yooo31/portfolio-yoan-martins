import React from "react";

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
      <div className="modal-box">
        <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <div>
          <p>Nom du projet: {selectedProject.name}</p>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
