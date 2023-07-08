import React from "react";

// Styles
import s from "./HeaderTopNav.module.scss";

// Images
import { Layouts } from "../../../iconComponents";

export const HeaderTopNav: React.FC = () => {
  return (
    <nav className={s.root}>
      {/* <button className={s.button} aria-label="Show info menu.">
        <Layouts />
        Info
      </button> */}

      <ul className={s.list}>
        <li className={s.item}>
          <a href="./single-post.html" className={s.link}>
            Delivery & returns
          </a>
        </li>

        <li className={s.item}>
          <a href="./track-order.html" className={s.link}>
            Track order
          </a>
        </li>

        <li className={s.item}>
          <a href="./blog.html" className={s.link}>
            Blog
          </a>
        </li>

        <li className={s.item}>
          <a href="./contacts.html" className={s.link}>
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderTopNav;
