import React from "react"
import ThumbnailGameCardStyles from "./ThumbnailGameCard.module.scss"
import GameCard from "../GameCard/GameCard"
const ThumbnailGameCard = props => {
  return <GameCard {...props} styles={ThumbnailGameCardStyles} />
}
export default ThumbnailGameCard
