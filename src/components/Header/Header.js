import React, { useState } from "react";
import headerStyles from "./Header.module.scss";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import DesktopNavbar from "../DesktopNavbar/DesktopNavbar";
import Logo from "../../images/Logo.png";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const navItems = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "images",
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
          {/* <img src={Logo} alt="SciPlay Logo" width="210" height="70" /> */}
          <img src="data:image/png;base64,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" alt="לוגו של חברת טמבור - קישור לעמוד הבית" tabIndex="0" data-ll-status="loaded"></img>
        </a>
      </div>
      <DesktopNavbar className={headerStyles.navBar} navItems={navItems} />
    </header>
  );
};

export default Header;
