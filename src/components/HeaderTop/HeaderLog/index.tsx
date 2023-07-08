import React from "react";

// Styles
import s from "./HeaderLog.module.scss";
import cs from "../../scss/global/_index.module.scss";

// Images
import { Person } from "../../../iconComponents";
// import FlagUsa from "../../../assets/img/flag-usa.svg";

export const HeaderLog: React.FC = () => {
  return (
    <div className={s.root} id="login">
      <button className={s.loginBtn}>Log in</button>
      <span className={s.divider}>/</span>
      <button className={s.registerBtn}>Register</button>
      <Person className={s.personIcon} />
    </div>
  );
};
