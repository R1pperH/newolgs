import { useState } from "react";
import "./newsmodal.css";
import { IoClose } from "react-icons/io5";

export default function NewsModal({ setModal, showModal }) {
  console.log(setModal);
  return (
    <>
      <div className="modal">
        <div className="modal-img-container">
          <img src={setModal.image} alt="" className="modal-img" />
        </div>

        <div className="modal-txt-container">
          <h3>{setModal.title}</h3>
          <p>{setModal.content}</p>
        </div>
        <i className="fa-solid fa-circle-xmark marking" onClick={showModal}></i>
      </div>
    </>
  );
}
