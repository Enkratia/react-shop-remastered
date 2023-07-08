import React from "react";

// Styles
import s from "./HeaderCurrency.module.scss";
// import cs from "../../scss/global/_index.module.scss";

// Images
import FlagUsa from "../../../assets/img/flag-usa.svg";
import { AngleDown } from "../../../iconComponents";

export const HeaderCurrency: React.FC = () => {
  return (
    <div className={s.root}>
      <img className={s.flag} src={FlagUsa} alt="Flag" aria-hidden="true" />

      <div className={s.select} role="listbox" tabIndex={0}>
        <div className={s.selectHead}>
          <span className={s.selectSelected}>Eng / $</span>
          <AngleDown aria-hidden="true" />
        </div>

        <div className={s.selectWrapper}>
          <ul className={s.selectList} data-overlayscrollbars-initialize>
            <li
              className={`${s.selectItem} ${s.selectItemActive}`}
              role="option"
              aria-selected="true">
              Eng / $
            </li>

            <li className={`${s.selectItem}`} role="option" aria-selected="false">
              Ru / &#8381;
            </li>

            <li className={`${s.selectItem}`} role="option" aria-selected="false">
              Eu / &#8364;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
