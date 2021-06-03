import React from "react"
import RuleCardListStyles from "./RuleCardList.module.scss"
import RuleCard from "../RuleCard/RuleCard"
import { useStaticQuery, graphql } from "gatsby"
import { getImageDetails } from "../../scripts/utils"
const RuleCardList = ({ cards }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulRuleCard {
        nodes {
          contentful_id
          title
          imageAlternateText
          description {
            description
          }
          animationThumbnail {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  const relevantCards = cards.map(card => {
    const id = card.sys.id
    const cardInfo = data.allContentfulRuleCard.nodes.find(
      curr => curr.contentful_id === id
    )
    const { contentful_id, title } = cardInfo
    return {
      contentful_id,
      title,
      description: cardInfo.description.description,
      animationThumbnail: getImageDetails(cardInfo.animationThumbnail),
    }
  })
  return (
    <div className={RuleCardListStyles.container}>
      {relevantCards.map((ruleInfo, ind) => (
        <RuleCard key={`rule-card-${ind}`} {...ruleInfo}></RuleCard>
      ))}
    </div>
  )
}

export default RuleCardList
