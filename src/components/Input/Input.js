import React from "react";
import s from "./Input.module.scss";

const Input = (props) => {
  const { field, form, ...rest } = props;
  const { name } = field;

  return (
    <div>
      <input className={s.appInput} {...rest} {...field} />
      {form.touched[name] && form.errors[name] && (
        <div className={s.error}>{form.errors[name]}</div>
      )}
    </div>
  );
};
export default Input;
