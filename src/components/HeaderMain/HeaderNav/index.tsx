import React from "react";

import s from "./HeaderNav.module.scss";

export const HeaderNav: React.FC = () => {
  return (
    <nav className={s.root}>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="#" className={s.link}>
            Women
          </a>
        </li>

        <li className={s.item}>
          <a href="#" className={s.link}>
            Men
          </a>
        </li>

        <li className={s.item}>
          <a href="#" className={s.link}>
            Girls
          </a>
        </li>

        <li className={s.item}>
          <a href="#" className={s.link}>
            Boys
          </a>
        </li>

        <li className={s.item}>
          <a href="#" className={`${s.link} ${s.linkSale}`}>
            Sale
          </a>
        </li>
      </ul>
    </nav>
  );
};
