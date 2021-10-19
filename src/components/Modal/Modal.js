import React from "react";
import s from "./Modal.module.scss";

const Modal = ({ target, header, text, func, actions }) => {
  return (
    <div id={target} className={s.modalWrapper} onClick={func}>
      <div className={s.modal}>
        <div className={s.modalHeader}>
          <h1 className={s.modalTitle}>{header}</h1>
        </div>
        {text}
        <div>{actions}</div>
      </div>
    </div>
  );
};

export default Modal;
