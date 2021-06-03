import React from "react"
import BurgerIconStyles from "./BurgerIcon.module.scss"
const BurgerIcon = ({ onClickHandler }) => {
  return (
    <div
      className={BurgerIconStyles.expandMenuIcon}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      role="button"
      tabIndex={0}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
export default BurgerIcon
