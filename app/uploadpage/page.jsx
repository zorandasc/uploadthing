"use client";
import React, { useState } from "react";
import Image from "next/image";
import UploadDrop from "../components/UploadDrop";
import imageCompression from "browser-image-compression";
import "./uploadpage.css"

const UploadPage = () => {
  const [images, setImages] = useState([]);

  const handleOnUploadComplete = (res) => {
    // Do something with the response
    alert("Upload Completed");
    const newImages = res?.map(({ customId, key, name }) => {
      return { customId, key, name };
    });
    setImages([...newImages, ...images]);
  };

  const handleBeforeUpload = async (files) => {
    // Compress each file before uploading
    const compressedFiles = await Promise.all(
      files.map(async (file) => {
        try {
          const compressedFile = await imageCompression(file, {
            maxSizeMB: 0.5, // Maximum file size in MB
            maxWidthOrHeight: 1920, // Maximum width or height of the image
          });
          return compressedFile;
        } catch (error) {
          console.error("Error compressing file:", error);
          return file; // Return original file if compression fails
        }
      })
    );

    return compressedFiles;
  };
  return (
    <main className="main">
      <section className="uploaded-images-small">
        {images?.map((item, i) => (
          <div key={i} className="image-container">
            <Image
              priority
              src={`https://utfs.io/f/${item.key}`}
              alt="Image"
              layout="fill"
              className="image"
              sizes="100%"
              blurDataURL={`https://utfs.io/f/${item.key}`}
              placeholder="blur"
            />
          </div>
        ))}
      </section>
      <UploadDrop
        handleOnUploadComplete={handleOnUploadComplete}
        handleBeforeUpload={handleBeforeUpload}
      ></UploadDrop>
    </main>
  );
};

export default UploadPage;
