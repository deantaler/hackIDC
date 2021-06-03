import React from "react"
import GamePageDescriptionStyles from "./GamePageDescription.module.scss"
import RichTextRenderer from "../RichTextRenderer/RichTextRenderer"
import Img from "gatsby-image"
const GamePageDescription = ({
  title,
  backgroundColor,
  textColor,
  content,
  bgImage,
  leftImage,
  rightImage,
  logo,
}) => {
  return (
    <div
      className={GamePageDescriptionStyles.container}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {leftImage && (
        <div className={GamePageDescriptionStyles.leftImage}>
          <div className={GamePageDescriptionStyles.imageContainer}>
            <Img
              fluid={leftImage.fluid}
              loading="lazy"
              height={leftImage.height}
              width={leftImage.width}
              style={{
                maxWidth: leftImage.width,
                maxHeight: leftImage.height,
              }}
              alt={leftImage.description}
            />
          </div>
        </div>
      )}
      <div
        className={GamePageDescriptionStyles.sectionContent}
        style={{
          color: textColor,
          background: `linear-gradient(90deg, rgba(${backgroundColor},0) 0%, rgba(${backgroundColor},.65) 25%, rgba(${backgroundColor},.65) 75%, rgba(${backgroundColor},0) 100%)`,
        }}
      >
        <div className={GamePageDescriptionStyles.heading}>
          {logo && (
            <div className={GamePageDescriptionStyles.logo}>
              <Img
                fluid={logo.fluid}
                loading="lazy"
                height={logo.height}
                width={logo.width}
                style={{ maxWidth: logo.width, maxHeight: logo.height }}
                alt={logo.description}
              />
            </div>
          )}
          <h1>{title}</h1>
          <div className={GamePageDescriptionStyles.headingSpacer}>
            <span className={GamePageDescriptionStyles.headingLine}></span>
          </div>
        </div>
        <div className={GamePageDescriptionStyles.content}>
          <RichTextRenderer content={content}></RichTextRenderer>
        </div>
      </div>
      {rightImage && (
        <div className={GamePageDescriptionStyles.rightImage}>
          <div className={GamePageDescriptionStyles.imageContainer}>
            <Img
              fluid={rightImage.fluid}
              loading="lazy"
              height={rightImage.height}
              width={rightImage.width}
              style={{
                maxWidth: rightImage.width,
                maxHeight: rightImage.height,
              }}
              alt={rightImage.description}
            />
          </div>
        </div>
      )}
      <svg
        className={GamePageDescriptionStyles.bottomSeperator}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        fill={`rgb(${backgroundColor})`}
        width="100%"
        height="60"
        viewBox="0 0 4.66666 0.333331"
        preserveAspectRatio="none"
      >
        <path
          className="fil0"
          d="M-7.87402e-006 0.0148858l0.00234646 0c0.052689,0.0154094 0.554437,0.154539 1.51807,0.166524l0.267925 0c0.0227165,-0.00026378 0.0456102,-0.000582677 0.0687992,-0.001 1.1559,-0.0208465 2.34191,-0.147224 2.79148,-0.165524l0.0180591 0 0 0.166661 -7.87402e-006 0 0 0.151783 -4.66666 0 0 -0.151783 -7.87402e-006 0 0 -0.166661z"
        ></path>
      </svg>
    </div>
  )
}
export default GamePageDescription
