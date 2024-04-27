import React from "react";
import { generateUploadDropzone } from "@uploadthing/react";
import "./uploaddrop.css"

const UploadDropzone = generateUploadDropzone();

const UploadDrop = ({ handleOnUploadComplete, handleBeforeUpload }) => {
  return (
    <UploadDropzone
      className="uploaddropzone"
      endpoint="multipleImageUploader"
      onClientUploadComplete={handleOnUploadComplete}
      onUploadError={(error) => {
        alert(`ERROR! ${error.message}`);
      }}
      onUploadBegin={(name) => {
        // Do something once upload begins
        console.log("Uploading: ", name);
      }}
      onBeforeUploadBegin={handleBeforeUpload}
    />
  );
};

export default UploadDrop;
