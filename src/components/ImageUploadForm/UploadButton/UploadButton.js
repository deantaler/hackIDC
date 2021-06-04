import React from "react";

const UploadButton = (props) => <div className="file-field input-field">
    <div className="btn">
      <span>Board Photo</span>
      <input type="file" name="board" id="single" onChange={props.onChange} />
    </div>
    <div className="file-path-wrapper">
      <input className="file-path validate" type="text" />
    </div>
  </div>
  

export default UploadButton;
