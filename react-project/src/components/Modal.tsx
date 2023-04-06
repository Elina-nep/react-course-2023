import React from "react";
import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div className="modal-back" onClick={onClose} />
      <div className="modal-container">
        <h1> {title} </h1>
        {children}
      </div>
    </>
  );
}
