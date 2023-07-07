import React from "react";

export const HeaderCurrency: React.FC = () => {
  return (
    <div className="header-top__currency currency">
      <img className="currency__flag" src="./img/flag-usa.svg" alt="" aria-hidden="true" />

      <div
        className="custom-select header-top__select"
        id="custom-select"
        role="listbox"
        tabIndex={0}>
        <div className="custom-select__head">
          <span
            className="custom-select__selected header-top__selected currency__selected"
            id="custom-select-selected">
            Eng / $
          </span>

          <svg className="custom-select__icon" xmlns="http://www.w3.org/2000/svg">
            <use href="./img/sprite.svg#angle-down"></use>
          </svg>
        </div>

        <div className="custom-select__inner-wrapper">
          <ul
            className="custom-select__list"
            id="custom-select-list"
            data-overlayscrollbars-initialize>
            <li
              className="custom-select__item custom-select__item--active"
              role="option"
              aria-selected="true">
              Eng / $
            </li>

            <li className="custom-select__item" role="option" aria-selected="false">
              Ru / &#8381;
            </li>

            <li className="custom-select__item" role="option" aria-selected="false">
              Eu / &#8364;
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
