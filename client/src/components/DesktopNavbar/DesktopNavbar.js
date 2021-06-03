import React from "react";

import DesktopNavbarStyles from "./DesktopNavbar.module.scss";
const DesktopNavbar = (props) => {
  const { navItems } = props;
  const menuItemLink = (name, path, type) => {
    return (
      <a href={path} className={DesktopNavbarStyles.link}>
        {name}
      </a>
    );
  };
  return (
    <nav className={`${DesktopNavbarStyles.desktopNavBar} `}>
      <ul>
        {navItems.map((item, ind) => {
          const { name, path, type } = item;
          return (
            <li key={`desktop-nav-item-${ind}`}>
              {menuItemLink(name, path, type)}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default DesktopNavbar;
