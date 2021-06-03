import React from "react"
import CareerCardStyles from "./CareerCard.module.scss"
import Img from "gatsby-image"
const CareerCard = ({
  title,
  description,
  animationThumbnail,
  backgroundColor,
}) => {
  return (
    <div className={CareerCardStyles.container} style={{ backgroundColor }}>
      <div className={CareerCardStyles.animation}>
        <Img
          className={CareerCardStyles.ruleIcon}
          fluid={animationThumbnail.fluid}
          loading="lazy"
          width="85"
          height="85"
          alt={animationThumbnail.description}
          srcset=""
        />
      </div>
      <div className={CareerCardStyles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default CareerCard
