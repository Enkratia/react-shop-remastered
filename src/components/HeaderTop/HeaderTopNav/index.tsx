import React from "react";

export const HeaderTopNav: React.FC = () => {
  return (
    <nav className="header-top__nav top-nav" id="top-nav">
      <button className="top-nav__button" id="top-nav-button" aria-label="Show info menu.">
        <svg xmlns="http://www.w3.org/2000/svg">
          <use href="./img/sprite.svg#layouts"></use>
        </svg>

        <span className="top-nav__button-text">Info</span>
      </button>

      <ul className="top-nav__list">
        <li className="top-nav__item">
          <a href="./single-post.html" className="top-nav__link">
            Delivery & returns
          </a>
        </li>

        <li className="top-nav__item">
          <a href="./track-order.html" className="top-nav__link">
            Track order
          </a>
        </li>

        <li className="top-nav__item">
          <a href="./blog.html" className="top-nav__link">
            Blog
          </a>
        </li>

        <li className="top-nav__item">
          <a href="./contacts.html" className="top-nav__link">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderTopNav;
