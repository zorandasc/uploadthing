"use client";
import React from "react";
import "./uploadbutton.css";

const UploadButton = ({handleClick}) => {
  return (
    <div className="container1">
      <button className="menu1" onClick={handleClick}>
        <i className="fa fa-cloud-upload fa-2x" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default UploadButton;
