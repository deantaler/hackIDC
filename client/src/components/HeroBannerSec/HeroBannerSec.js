import React from "react"
import HeroBannerSecStyles from "./HeroBannerSec.module.scss"
import BackgroundImage from "gatsby-background-image"
import RichTextRenderer from "../RichTextRenderer/RichTextRenderer"
const HeroBannerSec = props => {
  const {
    heroBanner1920w,
    slogan,
    horizontalTextPosition,
    verticalTextPosition,
    svgSeperator,
  } = props

  const horizontalClass =
    horizontalTextPosition === "left"
      ? HeroBannerSecStyles.horizontalLeft
      : horizontalTextPosition === "right"
      ? HeroBannerSecStyles.horizontalRight
      : ""

  const verticalClass =
    verticalTextPosition === "center"
      ? HeroBannerSecStyles.verticalCenter
      : verticalTextPosition === "bottom"
      ? HeroBannerSecStyles.verticalBottom
      : ""
  return (
    <BackgroundImage
      className={HeroBannerSecStyles.heroBanner}
      fluid={heroBanner1920w.fluid}
      Tag="section"
      fadeIn="false"
      loading="eager"
      alt={heroBanner1920w.description}
    >
      <div className={`${HeroBannerSecStyles.contentContainer}`}>
        <div
          className={`${horizontalClass} ${verticalClass} ${HeroBannerSecStyles.textContainer}`}
        >
          {slogan && (
            <div className={HeroBannerSecStyles.text}>
              <RichTextRenderer content={slogan} />
            </div>
          )}
        </div>
        <div className={HeroBannerSecStyles.seperator}>{svgSeperator}</div>
      </div>
    </BackgroundImage>
  )
}
export default HeroBannerSec
