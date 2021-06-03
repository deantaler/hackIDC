export const getImageDetails = imageQueryRes =>
  imageQueryRes && {
    fluid: imageQueryRes.fluid,
    fixed: imageQueryRes.fixed,
    description: imageQueryRes.description,
    height:
      imageQueryRes.file &&
      imageQueryRes.file.details &&
      imageQueryRes.file.details.image &&
      imageQueryRes.file.details.image.height,
    width:
      imageQueryRes.file &&
      imageQueryRes.file.details &&
      imageQueryRes.file.details.image &&
      imageQueryRes.file.details.image.width,
  }
