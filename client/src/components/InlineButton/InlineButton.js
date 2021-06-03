import React, { useState } from "react"
import InlineButtonStyles from "./InlineButton.module.scss"
const InlineButton = ({ text, textColor, href, backgroundColor }) => {
  const [isHover, setIsHover] = useState(false)
  const colors = {
    color: textColor,
    backgroundColor: `rgba(${backgroundColor}, 1)`,
    border: `5px solid rgba(${backgroundColor}, 1)`,
  }
  const hoverColors = {
    color: `rgba(${backgroundColor}, 1)`,
    backgroundColor: textColor,
    border: `5px solid ${textColor}`,
  }
  const hoverHandler = () => setIsHover(true)
  const mouseOutHandler = () => setIsHover(false)
  return (
    <a
      href={href}
      className={InlineButtonStyles.button}
      style={isHover ? hoverColors : colors}
      onMouseOver={hoverHandler}
      onFocus={hoverHandler}
      onMouseOut={mouseOutHandler}
      onBlur={mouseOutHandler}
    >
      {text} &#10095;
    </a>
  )
}
export default InlineButton
