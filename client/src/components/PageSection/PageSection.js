import React, { useRef, useState } from "react"
import Img from "gatsby-image"
import RichTextRenderer from "../RichTextRenderer/RichTextRenderer"
import PageSectionStyles from "./PageSection.module.scss"
import useFadeIn from "../../hooks/useFadeIn"
import useReadMore from "../../hooks/useReadMore"
import { useMediaQuery } from "react-responsive"
const PageSection = props => {
  const {
    title,
    content,
    textColor,
    leftImage,
    rightImage,
    styles,
    isStroked,
    shortenOnMobile,
  } = props

  const leftImageRef = useRef(null)
  const rightImageRef = useRef(null)
  useFadeIn(leftImageRef, PageSectionStyles.flyLeft)
  useFadeIn(rightImageRef, PageSectionStyles.flyRight)

  const isMobileView = useMediaQuery({
    query: "(max-width: 680px)",
  })
  const contentRef = useRef(null)
  const [isContentTooLong] = useReadMore(contentRef)
  const [isExpanded, setIsExpanded] = useState(false)
  const isNormalView = !isMobileView || !shortenOnMobile || !isContentTooLong
  const expandSectionHandler = () => setIsExpanded(true)

  const contentClass =
    (!isNormalView && !isExpanded && PageSectionStyles.mobileMaxHeight) ||
    (!isNormalView && PageSectionStyles.expandSection)
  return (
    <div className={PageSectionStyles.section}>
      <div
        className={`${
          !isNormalView && !isExpanded && PageSectionStyles.innerShadow
        } ${styles.container}`}
      >
        <div className={styles.topSeperator}>
          <svg
            className="uvc-svg-triangle"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            fill="#ffffff"
            width="100%"
            height="30"
            viewBox="0 0 0.156661 0.1"
            style={{ height: "30px" }}
          >
            <polygon points="0.156661,3.93701e-006 0.156661,0.000429134 0.117665,0.05 0.0783307,0.0999961 0.0389961,0.05 -0,0.000429134 -0,3.93701e-006 0.0783307,3.93701e-006 "></polygon>
          </svg>
        </div>

        {leftImage && (
          <div className={`${styles.leftImage}`} ref={leftImageRef}>
            <div className={styles.imageContainer}>
              <Img
                fluid={leftImage.fluid}
                loading="lazy"
                alt={leftImage.description}
              />
            </div>
          </div>
        )}
        <div
          className={`${styles.sectionContent} ${
            isStroked && styles.textStroke
          }`}
          style={{ color: textColor }}
        >
          <div className={styles.heading}>
            <h1>{title}</h1>
            <div className={styles.headingSpacer}>
              <span className={styles.headingLine}></span>
            </div>
          </div>
          <div className={`${styles.content} ${contentClass}`} ref={contentRef}>
            <RichTextRenderer content={content}></RichTextRenderer>
          </div>
        </div>

        {rightImage && (
          <div className={styles.rightImage} ref={rightImageRef}>
            <div className={styles.imageContainer}>
              <Img
                fluid={rightImage.fluid}
                loading="lazy"
                alt={rightImage.fluid}
              />
            </div>
          </div>
        )}
      </div>
      {!isNormalView && !isExpanded && (
        <div
          className={PageSectionStyles.readMore}
          onClick={expandSectionHandler}
          onKeyDown={expandSectionHandler}
          role="button"
          tabIndex={0}
        >
          <p>{isExpanded ? "Read Less  \u25B2" : "Read More \u25BC"}</p>
        </div>
      )}
    </div>
  )
}
export default PageSection
