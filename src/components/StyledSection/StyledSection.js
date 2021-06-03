import React from "react"
import StyledSectionStyles from "./StyledSection.module.scss"
import PageSection from "../PageSection/PageSection"
import BackgroundImage from "gatsby-background-image"
const StyledSection = props => {
  const section = (
    <PageSection
      {...props}
      styles={StyledSectionStyles}
      isStroked={props.bgImage}
    />
  )
  return props.bgImage ? (
    <BackgroundImage
      className={StyledSectionStyles.bgImage}
      fluid={props.bgImage.fluid}
      Tag="div"
      fadeIn="false"
      loading="lazy"
      alt={props.bgImage.description}
    >
      {section}
    </BackgroundImage>
  ) : (
    section
  )
}
export default StyledSection
