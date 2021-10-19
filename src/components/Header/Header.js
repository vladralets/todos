import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.scss";

function Header() {
  return (
    <header className={s.headBar}>
      <NavLink exact to="/todos">
        Todos
      </NavLink>

      <NavLink exact to="/create-todo">
        Create todo form
      </NavLink>
    </header>
  );
}

export default Header;
