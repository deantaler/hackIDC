import React from "react"
import HeroBannerStyles from "./HeroBanner.module.scss"
import RichTextRenderer from "../RichTextRenderer/RichTextRenderer"

const HeroBanner = props => {
  const { heroBanner1920w, slogan, svgSeperator } = props

  // background-image:
  //   -webkit-image-set(
  //     url(examples/images/image-384.jpg) 1x,
  //     url(examples/images/image-768.jpg) 2x,
  //   );
  // background-image:
  //   image-set(
  //     url(examples/images/image-384.jpg) 1x,
  //     url(examples/images/image-768.jpg) 2x,
  //   );
  return (
    <div className={HeroBannerStyles.container}>
      <div className={HeroBannerStyles.textContainer}>
        {slogan && (
          <div className={HeroBannerStyles.text}>
            <RichTextRenderer content={slogan} />
          </div>
        )}
      </div>

      <div className={HeroBannerStyles.imagesContainer}>
        <div
          className={`${HeroBannerStyles.imagePlaceHolder} ${HeroBannerStyles.hero1920w}`}
          style={{
            backgroundImage: `url(${heroBanner1920w.fluid.src})`,
          }}
        ></div>
      </div>
      <div className={HeroBannerStyles.seperator}>{svgSeperator}</div>
    </div>
  )
}
export default HeroBanner
