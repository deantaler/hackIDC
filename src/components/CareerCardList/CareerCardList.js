import React from "react"
import CareerCard from "../CareerCard/CareerCard"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "../Carousel/Carousel"
import { getImageDetails } from "../../scripts/utils"
const CareerCardList = ({ cards }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCareerCard {
        nodes {
          contentful_id
          title
          backgroundColor
          imageAlternateText
          description {
            description
          }
          animationThumbnail {
            description
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  `)
  const CareerCards = cards.map(card => {
    const id = card.sys.id
    const cardInfo = data.allContentfulCareerCard.nodes.find(
      curr => curr.contentful_id === id
    )
    const { contentful_id, title, backgroundColor } = cardInfo
    const info = {
      contentful_id,
      backgroundColor,
      title,
      description: cardInfo.description.description,
      animationThumbnail: getImageDetails(cardInfo.animationThumbnail),
    }
    return <CareerCard {...info} />
  })
  return <Carousel items={CareerCards} />
}
export default CareerCardList
