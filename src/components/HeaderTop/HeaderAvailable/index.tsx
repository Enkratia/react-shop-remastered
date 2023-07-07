import React from "react";

// Images
// import Phone from "../../../assets/img/svg/phone.svg";

// Styles
import s from "./HeaderAvailable.module.scss";

export const HeaderAvailable: React.FC = () => {
  return (
    <div className={s.root}>
      <a className={s.link} href="tel:+74055550128">
        <span className={s.text}>Available 24/7 at</span>

        <span className={s.icon} aria-label="hidden">
          {/* <Phone /> */}
        </span>

        <span className={s.tel}>(405) 555-0128</span>
      </a>
    </div>
  );
};
