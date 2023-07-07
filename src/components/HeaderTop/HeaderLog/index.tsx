import React from "react";

export const HeaderLog: React.FC = () => {
  return (
    <div className="header-top__login login" id="login">
      <button className="login__btn" id="login-btn-in">
        Log in
      </button>

      <button className="login__btn" id="login-btn-register">
        Register
      </button>

      <svg className="login__icon" xmlns="http://www.w3.org/2000/svg">
        <use href="./img/sprite.svg#person"></use>
      </svg>
    </div>
  );
};
