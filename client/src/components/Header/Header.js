import React, { useState } from "react";
import headerStyles from "./Header.module.scss";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import DesktopNavbar from "../DesktopNavbar/DesktopNavbar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const navItems = [
    {
      name: "home",
      path: "/",
    },
  ];

  return (
    <header className={headerStyles.headerBar}>
      <MobileNavbar
        navItems={navItems}
        toggleMenuLocation={toggleMenu}
        isMenuOpen={isMobileMenuOpen}
      />
      <div className={headerStyles.logo}>
        <a href="/">
          <img src={""} alt="SciPlay Logo" width="210" height="70" />
        </a>
      </div>
      <DesktopNavbar className={headerStyles.navBar} navItems={navItems} />
    </header>
  );
};

export default Header;
