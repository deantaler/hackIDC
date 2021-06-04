import React, { useState } from "react";
import Spinner from "./Spinner/Spinner";
import ImageGallery from "./ImageGallery/ImageGallery";
import UploadButton from "./UploadButton/UploadButton";
// import { API_URL } from "./config";
let API_URL = "http://localhost:5000";

const ImageUploadForm = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [images, setImages] = useState([]);

  const onChangeHandler = (e) => {
    const files = Array.from(e.target.files);
    setIsUploading(true);

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });
    console.log(formData);
    console.log(files);
    fetch(`${API_URL}/upload-image`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((images) => {
        setIsUploading(false);
        setImages(images);
      });
  };

  const removeImageHandler = (id) => {
    setImages(images.filter((image) => image.public_id !== id));
  };

  const content = isUploading ? (
    <Spinner />
  ) : images.length > 0 ? (
    <ImageGallery images={images} removeImage={removeImageHandler} />
  ) : (
    <UploadButton onChange={onChangeHandler} />
  );

  return (
    <div>
      <div className="buttons">{content}</div>
    </div>
  );
};

export default ImageUploadForm;
