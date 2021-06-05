import React from "react";

const UploadButton = ({boardRef, colorRef, onSubmitHandler}) => {

const buttonStyles = {minWidth: "200px"}
return <div id="form">

<div className="file-field input-field">
  <div id="to_hide">
    <div className="btn" style={buttonStyles}>
      <span>Board Photo</span>
      <input type="file" name="board" id="single" ref={boardRef} />
    </div>
    <div className="file-path-wrapper">
      <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
    </div>
  </div>
  <div className="file-field input-field">
    <div className="btn" style={buttonStyles}>
      <span>Requested Color</span>
      <input type="file" name="color" id="single" ref={colorRef}/>
    </div>
    <div className="file-path-wrapper">
      <input className="file-path validate" type="text" />
    </div>
  </div>
  <a className="waves-effect waves-light btn" style={{...buttonStyles, display:"block", margin:"0 auto", width:"50%"}} onClick={onSubmitHandler}>Submit</a>
  </div>
  <div id = "to_show" style={{"display":"hidden"}}>
    <div id ="color">
    </div>
  </div>
</div>


}

export default UploadButton;
