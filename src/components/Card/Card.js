import React from "react";
import s from "./Card.module.scss";
import Button from "../Button/Button";
import DelIcon from "../Icon/DelIcon";

const Card = (props) => {
  const toggleActive = (el) => {
    if (el.target.localName === "div") {
      el.target.classList.toggle(s.active);
    }
  };
  return (
    <div className={s.cardWrapper}>
      {props.delIcon ? (
        <DelIcon
          id={props.card.id}
          className={s.delIcon}
          func={props.delCard}
        />
      ) : null}
      <div onClick={toggleActive} id={props.id} className={s.todoCard}>
        <h3>{props.card.title}</h3>
        <p>{props.card.description}</p>

        {props.isBtn ? (
          <Button
            id={props.card.id}
            text="Edit"
            className={s.cardButton}
            func={props.editFunc}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Card;
