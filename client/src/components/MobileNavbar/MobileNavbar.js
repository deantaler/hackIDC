import React from "react"
import { Link } from "gatsby"
import MobileNavbarStyles from "./MobileNavbar.module.scss"
import BurgerIcon from "../BurgerIcon/BurgerIcon"
import SocialLinks from "../SocialLinks/SocialLinks"
const MobileNavbar = props => {
  const { navItems, toggleMenuLocation, isMenuOpen, socialLinks } = props

  const menuItemLink = (name, path, type) => {
    if (type === "internal") {
      return (
        <Link
          className={MobileNavbarStyles.link}
          activeClassName={MobileNavbarStyles.active}
          to={path}
        >
          {name}
        </Link>
      )
    } else {
      return (
        <a href={path} className={MobileNavbarStyles.link}>
          {name}
        </a>
      )
    }
  }
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
              const { name, path, type } = item
              return (
                <li key={`mobile-nav-item-${ind}`}>
                  {menuItemLink(name, path, type)}
                </li>
              )
            })}
          </ul>
        </nav>
        <SocialLinks
          socialLinks={socialLinks}
          groupClass={MobileNavbarStyles.socialLinksGroup}
          linkClass={MobileNavbarStyles.socialLink}
        />
      </div>
    </div>
  )
}
export default MobileNavbar
