import { useState } from "react";
import "./ModalMain.scss";
import ModalWindow from "./ModalWindow";

export default function ModalMain() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div
      className="container"
      style={{ background: openModal ? "greenyellow" : "white" }}
    >
      {!openModal && (
        <button onClick={() => setOpenModal(true)}>Open Modal</button>
      )}
      {openModal && <ModalWindow setOpenModal={setOpenModal} />}
    </div>
  );
}
