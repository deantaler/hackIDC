import React, { useState, useRef } from "react";
import Spinner from "./Spinner/Spinner";
import ImageGallery from "./ImageGallery/ImageGallery";
import UploadButton from "./UploadButton/UploadButton";
// import { API_URL } from "./config";
let API_URL = "http://localhost:5000";

const ImageUploadForm = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [files, setFiles] = useState([]);
  const [colors, setColors] = useState([]);
  const boardFile = useRef(null);
  const colorFile = useRef(null);
  

  const onSubmitHandler = e => {
    // document.querySelectorAll("#to_hide").style(display=hide);
    // document.querySelectorAll("#to_show").style(display=show);
 
    console.log(files);
    const formData = new FormData();
    console.log(boardFile, colorFile)
    formData.append('board', boardFile.current.files[0]);
    formData.append('color', colorFile.current.files[0]);

    console.log(formData);
    fetch(`${API_URL}/upload-image`, {
      method: 'POST',
      body: formData,
      
    })
      .then((res) => res.json())
      .then((colors) => {
        setColors(colors);
        console.log(colors);
      });
  }


 

  return (
    <div>
      <div style={{width: '80%', margin: '0 auto'}}>
      <UploadButton onSubmitHandler={onSubmitHandler} boardRef={boardFile} colorRef={colorFile}/>
        {colors.length > 0 && (
    <ImageGallery colors={colors} />
  )}</div>
    </div>
  );
};

export default ImageUploadForm;
