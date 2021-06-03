import React, { useState } from "react"
import ImageCarouselStyles from "./ImageCarousel.module.scss"
import ImageGallery from "react-image-gallery"
import Img from "gatsby-image"
const ImageCarousel = ({ images, baseColor }) => {
  const [isFullScreen, setFullScreen] = useState(false)

  const toggleFullScreenHandler = () => setFullScreen(!isFullScreen)
  const itemRenderer = item => {
    const isLandscape = item.height < item.width
    const width = isLandscape ? "max(50vw,300px)" : "max(30vw,300px) "
    return (
      <div className={ImageCarouselStyles.carouselImage}>
        <div
          className={ImageCarouselStyles.imageContainer}
          style={{ width: width }}
        >
          <Img fluid={item.fluid} loading="lazy" alt={item.description} />
        </div>
      </div>
    )
  }

  const fullScreenRenderer = item => {
    const isLandscape = item.height < item.width
    const width = isLandscape ? "85%" : "60vmin"
    return (
      <div className={ImageCarouselStyles.fullScreenCarouselImage}>
        <div
          className={ImageCarouselStyles.fullScreenImageContainer}
          style={{ width: width }}
        >
          <Img fluid={item.fluid} loading="lazy" alt={item.description} />
        </div>
      </div>
    )
  }

  const BlackBackgroundModal = (
    <div
      className={
        isFullScreen
          ? `${ImageCarouselStyles.fullScreenModal} ${ImageCarouselStyles.blackBackgroundModal}`
          : ImageCarouselStyles.container
      }
      onClick={isFullScreen ? toggleFullScreenHandler : () => undefined}
      onKeyDown={isFullScreen ? toggleFullScreenHandler : () => undefined}
      role="button"
      tabIndex={0}
      aria-label="Toggle Full Screen"
    ></div>
  )

  const CloseModalButton = (
    <div
      className={ImageCarouselStyles.closeModalButton}
      onClick={toggleFullScreenHandler}
      onKeyDown={toggleFullScreenHandler}
      role="button"
      tabIndex={0}
      aria-label="Exit Full Screen"
    >
      <span style={{ backgroundColor: baseColor }}></span>
    </div>
  )
  return (
    <div
      className={
        isFullScreen
          ? ImageCarouselStyles.fullScreenModal
          : ImageCarouselStyles.shrinked
      }
    >
      {BlackBackgroundModal}
      {isFullScreen && CloseModalButton}
      <div className={ImageCarouselStyles.gallery}>
        <ImageGallery
          items={images}
          lazyLoad={true}
          showPlayButton={false}
          showBullets={false}
          showNav={true}
          autoPlay={false}
          showThumbnails={true}
          slideInterval={8000}
          renderItem={isFullScreen ? fullScreenRenderer : itemRenderer}
          showFullscreenButton={false}
          onClick={toggleFullScreenHandler}
        />
      </div>
    </div>
  )
}
export default ImageCarousel
