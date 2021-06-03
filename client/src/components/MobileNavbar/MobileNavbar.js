import React from "react";
import MobileNavbarStyles from "./MobileNavbar.module.scss";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
const MobileNavbar = (props) => {
  const { navItems, toggleMenuLocation, isMenuOpen } = props;

  const menuItemLink = (name, path) => {
    return (
      <a href={path} className={MobileNavbarStyles.link}>
        {name}
      </a>
    );
  };
  return (
    <div className={MobileNavbarStyles.mobileNavBar}>
      <BurgerIcon onClickHandler={toggleMenuLocation} />
      <div
        className={`${MobileNavbarStyles.sidebar} ${
          isMenuOpen ? "" : MobileNavbarStyles.collapse
        }`}
      >
        <div
          className={MobileNavbarStyles.closeMobileMenuIcon}
          onClick={toggleMenuLocation}
          onKeyDown={toggleMenuLocation}
          role="button"
          tabIndex={0}
        >
          <span></span>
        </div>
        <nav>
          <ul>
            {navItems.map((item, ind) => {
              const { name, path } = item;
              return (
                <li key={`mobile-nav-item-${ind}`}>
                  {menuItemLink(name, path)}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default MobileNavbar;
