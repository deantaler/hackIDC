import React from "react"
import CoreValueStyles from "./CoreValue.module.scss"
const CoreValue = ({ title, content }) => {
  const titleGenerator = unstyledTitle => {
    const [firstWord, secondWord] = unstyledTitle.split(" ")
    return (
      <h2>
        <span className={CoreValueStyles.firstWord}>#{firstWord}</span>
        <span className={CoreValueStyles.secondWord}>{secondWord}</span>
      </h2>
    )
  }
  return (
    <div className={CoreValueStyles.container}>
      {titleGenerator(title)}
      <p>{content}</p>
    </div>
  )
}
export default CoreValue
