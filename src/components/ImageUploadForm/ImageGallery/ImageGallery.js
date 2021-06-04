import React from "react";
import imageGalleryStyles from "./ImageGallery.module.scss"

const ImageGallery = (props) =>
<div className={imageGalleryStyles.container}>

  {props.colors.map((color, i) => (
    <div key={i} className={imageGalleryStyles.colorBlock} style={{backgroundColor: `rgb(${color.RGB})`}}>
      
    </div>
  ))}
</div>

export default ImageGallery;
