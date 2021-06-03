import React from "react"
import { Link } from "gatsby"
import DesktopNavbarStyles from "./DesktopNavbar.module.scss"
const DesktopNavbar = props => {
  const { navItems } = props
  const menuItemLink = (name, path, type) => {
    if (type === "internal") {
      return (
        <Link
          className={DesktopNavbarStyles.link}
          activeClassName={DesktopNavbarStyles.active}
          to={path}
        >
          {name}
        </Link>
      )
    } else {
      return (
        <a href={path} className={DesktopNavbarStyles.link}>
          {name}
        </a>
      )
    }
  }
  return (
    <nav className={`${DesktopNavbarStyles.desktopNavBar} `}>
      <ul>
        {navItems.map((item, ind) => {
          const { name, path, type } = item
          return (
            <li key={`desktop-nav-item-${ind}`}>
              {menuItemLink(name, path, type)}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default DesktopNavbar
