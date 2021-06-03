import React, { useState } from "react"
import CarouselStyles from "./Carousel.module.scss"
const Carousel = ({ items }) => {
  const totalItems = items.length
  const [currentItem, setCurrentItem] = useState(0)

  const switchItemHandler = ind => () => setCurrentItem(ind)
  const nextItemHandler = () => setCurrentItem((currentItem + 1) % totalItems)
  const prevItemHandler = () =>
    setCurrentItem(currentItem === 0 ? totalItems - 1 : currentItem - 1)

  const dots = items.map((item, ind) => {
    const indexClass = `${CarouselStyles.dot} ${
      ind === currentItem ? CarouselStyles.active : undefined
    }`
    return (
      <span
        className={indexClass}
        onClick={switchItemHandler(ind)}
        onKeyDown={switchItemHandler(ind)}
      />
    )
  })
  return (
    <div className={CarouselStyles.carousel}>
      <button className={CarouselStyles.prev} onClick={prevItemHandler}>
        &#10094;
      </button>
      <button className={CarouselStyles.next} onClick={nextItemHandler}>
        &#10095;
      </button>

      <div className={`${CarouselStyles.item} ${CarouselStyles.fade}`}>
        {items[currentItem]}
      </div>
      <div className={CarouselStyles.dotsContainer}>{dots}</div>
    </div>
  )
}
export default Carousel
