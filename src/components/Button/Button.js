import React from "react";

export const Button = (props) => {
  return (
    <button id={props.id} className={props.className} onClick={props.func}>
      {props.text}
    </button>
  );
};
export default Button;
