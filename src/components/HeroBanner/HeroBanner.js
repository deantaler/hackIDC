import React from "react"
import HeroBannerStyles from "./HeroBanner.module.scss"
import colorCalibration from "../../images/color-calibration.jpg"
const HeroBanner = () => {

  
  return (
    <div className={HeroBannerStyles.container}>
      <div className={HeroBannerStyles.textContainer}>
          <div className={HeroBannerStyles.text}>
            {`ColorTube - I see your true color, and that's why you love me`}
          </div>
      </div>

      <div className={HeroBannerStyles.imagesContainer}>
        <div
          className={`${HeroBannerStyles.imagePlaceHolder}`}
          style={{
            backgroundImage: `url(${colorCalibration})`,
          }}
          
        ></div>
      </div>
    </div>
  )
}
export default HeroBanner
