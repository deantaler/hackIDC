import React from "react"
import InformativeSectionStyles from "./InformativeSection.module.scss"
import PageSection from "../PageSection/PageSection"
const InformativeSection = props => {
  return <PageSection {...props} styles={InformativeSectionStyles} />
}

export default InformativeSection
