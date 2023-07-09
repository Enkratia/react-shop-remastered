import React from "react";
import { HeaderChoice, HeaderNav, HeaderSearch } from "../../components";

// Styles
import s from "./HeaderMain.module.scss";
import cs from "../../scss/global/_index.module.scss";

// Images
import Logo from "../../assets/img/logo.svg";

export const HeaderMain: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={`${s.container} ${cs.container} ${cs.container40}`}>
        <a href="#" className={s.logo}>
          <img src={Logo} alt="Logo." />
        </a>

        <HeaderNav />
        <HeaderSearch />
        <HeaderChoice />
      </div>
    </div>
  );
};
