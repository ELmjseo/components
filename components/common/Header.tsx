import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>YOURPASS</h1>
      <div className="header__sub">
        <span className="header__sub__icon">
          <img src="../images/icon/icon_search.svg" alt="검색" />
        </span>
        <span className="header__sub__icon">
          <img src="../images/icon/icon_cart.svg" alt="장바구니" />
        </span>
        <span className="header__sub__icon">
          <img src="../images/icon/icon_menu.svg" alt="메뉴" />
        </span>
      </div>
    </header>
  );
};

export default Header;
