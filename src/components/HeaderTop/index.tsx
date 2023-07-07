import React from "react";
import { HeaderCurrency, HeaderLog, HeaderTopNav, HeaderAvailable } from "../../components";

import s from "./HeaderTop.module.scss";

export const HeaderTop: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.container + " container"}>
        <HeaderAvailable />
        <HeaderTopNav />
        <HeaderCurrency />
        <HeaderLog />
      </div>
    </div>
  );
};
