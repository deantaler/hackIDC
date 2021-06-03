import React from "react"
import GameCardsListStyles from "./GameCardsList.module.scss"
import LogoGameCard from "../LogoGameCard/LogoGameCard"
import ThumbnailGameCard from "../ThumbnailGameCard/ThumbnailGameCard"
import { graphql, useStaticQuery } from "gatsby"
import { getImageDetails } from "../../scripts/utils"
const GameCardsList = ({ cards, visuals }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulGameCard {
        nodes {
          contentful_id
          title
          description {
            description
          }
          linkUrl
          backgroundColor
          gameIcon350w {
            description
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }

          gameThumbnail350w {
            description
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  `)

  // The card content that we get as props doesn't contain fragments such as ...GatsbyContentfulFluid
  // and it's structure doesn't suite the initial design
  // To overcome this solution, I get all cards in the desired structure using
  // useStaticQuery, but then I filter the list out to have only the cards I need for this specific
  // page, by using the Ids of the cards.

  const relevantCards = cards.map(card => {
    const id = card.sys.id
    const cardInfo = data.allContentfulGameCard.nodes.find(
      curr => curr.contentful_id === id
    )
    const { title, linkUrl, backgroundColor } = cardInfo
    return {
      title,
      linkUrl,
      backgroundColor,
      description: cardInfo.description.description,
      icon350w:
        visuals === "icon"
          ? getImageDetails(cardInfo.gameIcon350w)
          : getImageDetails(cardInfo.gameThumbnail350w),
    }
  })
  return (
    <div className={GameCardsListStyles.gameCardList}>
      {relevantCards.map((card, ind) => {
        return visuals === "icon" ? (
          <LogoGameCard key={`logo-game-card-${ind}`} {...card} />
        ) : (
          <ThumbnailGameCard key={`thumbnail-game-card-${ind}`} {...card} />
        )
      })}
    </div>
  )
}

export default GameCardsList
