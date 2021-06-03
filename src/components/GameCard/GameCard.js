import React from "react"
import Img from "gatsby-image"
import SmartLink from "../SmartLink/SmartLink"
const GameCard = props => {
  const {
    icon350w,
    title,
    description,
    linkUrl,
    backgroundColor,
    styles,
  } = props

  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <SmartLink href={linkUrl}>
          <Img
            fluid={icon350w.fluid}
            loading="lazy"
            className={`${styles.gameIcon}`}
            alt={icon350w.description}
            width="350"
            height="350"
          />
        </SmartLink>
      </div>
      <div className={styles.descriptionContainer}>
        <div
          className={styles.description}
          style={{ backgroundColor: backgroundColor }}
        >
          <div className={styles.content}>
            <h1>{title}</h1>
            <div className={styles.divider}>
              <div className={styles.line}></div>
            </div>
            <p className={styles.descriptionText}>{description}</p>
            <p className={styles.playGameButton}>
              <SmartLink
                href={linkUrl}
                style={{ backgroundColor: backgroundColor }}
              >{`Play now!`}</SmartLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GameCard
