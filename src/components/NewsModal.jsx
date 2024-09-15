import { useState } from "react";
import "./newsmodal.css";

export default function NewsModal({ setModal, display }) {
  console.log(setModal);
  return (
    <>
      <div className="modal">
        <img src={setModal.image} alt="" className="modal-img" />
        <h3>{setModal.title}</h3>
        <p>{setModal.description}</p>
      </div>
    </>
  );
}
