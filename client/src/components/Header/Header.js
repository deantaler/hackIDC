import React, { useState } from "react";
import { Link } from "gatsby";
import headerStyles from "./header.module.scss";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import DesktopNavbar from "../DesktopNavbar/DesktopNavbar";

import logo from "../../images/general/sciplay-logo.png";
import SocialLinks from "../SocialLinks/SocialLinks";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const navItems = data.allContentfulHeader.nodes[0].navigationBarLinks.map(
    (page) => {
      return {
        name: page.title,
        path: page.url,
        type: "external",
      };
    }
  );

  return (
    <header className={headerStyles.headerBar}>
      <MobileNavbar
        navItems={navItems}
        toggleMenuLocation={toggleMenu}
        isMenuOpen={isMobileMenuOpen}
        socialLinks={socialLinks}
      />
      <div className={headerStyles.logo}>
        <Link to="/">
          <img src={logo} alt="SciPlay Logo" width="210" height="70" />
        </Link>
      </div>
      <DesktopNavbar className={headerStyles.navBar} navItems={navItems} />
    </header>
  );
};

export default Header;
