import React from "react"
import RuleCardStyles from "./RuleCard.module.scss"
import Img from "gatsby-image"
const RuleCard = ({
  title,
  description,
  animationThumbnail,
  imageAlternateText,
}) => {
  return (
    <div className={RuleCardStyles.container}>
      <div className={RuleCardStyles.animation}>
        <Img
          className={RuleCardStyles.ruleIcon}
          fluid={animationThumbnail.fluid}
          width="100"
          height="100"
          alt={animationThumbnail.description}
        />
      </div>
      <div className={RuleCardStyles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
export default RuleCard
