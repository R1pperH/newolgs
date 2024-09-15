import { useState } from "react";
import "./newsmodal.css";
import { IoClose } from "react-icons/io5";

export default function NewsModal({ setModal, display }) {
  console.log(setModal);
  return (
    <>
      <div className="modal">
        <img src={setModal.image} alt="" className="modal-img" />
        <h3>{setModal.title}</h3>
        <p>{setModal.content}</p>
        <i className="fa-solid fa-circle-xmark"></i>
      </div>
    </>
  );
}
