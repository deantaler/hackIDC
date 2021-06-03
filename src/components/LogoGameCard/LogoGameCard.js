import React from "react"
import LogoGameCardStyles from "./LogoGameCard.module.scss"
import GameCard from "../GameCard/GameCard"
const LogoGameCard = props => {
  return <GameCard {...props} styles={LogoGameCardStyles} />
}
export default LogoGameCard
