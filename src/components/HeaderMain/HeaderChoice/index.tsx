import React from "react";

// Styles
import s from "./HeaderChoice.module.scss";
// import cs from "../../../scss/global/_index.module.scss";

// Images
import { Cart, Heart } from "../../../iconComponents";

export const HeaderChoice: React.FC = () => {
  return (
    <div className={s.root}>
      <div className={s.favorite}>
        <a href="#" className={s.favoriteBtn} aria-label="Go to observe favorites.">
          <Heart aria-hidden="true" />
        </a>

        <span className={s.favoriteCount}>2</span>
      </div>

      <div className={s.divider}></div>

      <div className={s.cart}>
        <button className={s.cartBtn} aria-label="Observe cart.">
          <Cart aria-hidden="true" />
        </button>

        <span className={s.cartCount}>4</span>
      </div>
    </div>
  );
};
