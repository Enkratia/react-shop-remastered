import React from "react";

// Styles
import s from "./HeaderAvailable.module.scss";

export const HeaderAvailable: React.FC = () => {
  return (
    <div className={s.root}>
      <a className={s.link} href="tel:+74055550128">
        <span className={s.text}>Available 24/7 at</span>

        {/* <span className={s.icon} aria-label="hidden">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 2.92188C7.67157 2.92188 7 3.59345 7 4.42188V19.5781C7 20.4066 7.67157 21.0781 8.5 21.0781H15.5C16.3284 21.0781 17 20.4066 17 19.5781V4.42188C17 3.59345 16.3284 2.92188 15.5 2.92188H15.4166L15.1731 3.50633C15.0178 3.87894 14.6537 4.12165 14.25 4.12165H9.75C9.34632 4.12165 8.98223 3.87894 8.82695 3.50633L8.58338 2.92188H8.5ZM5 4.42188C5 2.48888 6.567 0.921875 8.5 0.921875H15.5C17.433 0.921875 19 2.48888 19 4.42188V19.5781C19 21.5111 17.433 23.0781 15.5 23.0781H8.5C6.567 23.0781 5 21.5111 5 19.5781V4.42188Z" />
          </svg>
        </span> */}

        <span className={s.tel}>(405) 555-0128</span>
      </a>
    </div>
  );
};
