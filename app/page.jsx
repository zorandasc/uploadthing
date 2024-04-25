"use client";
import { generateUploadDropzone } from "@uploadthing/react";
import "./uploadPage.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import imageCompression from "browser-image-compression";
import { getAll, deleteImage } from "./actions.js";

const UploadDropzone = generateUploadDropzone();

const Home = () => {
  const [images, setImages] = useState([]);

  const handleRemove = async (key) => {
    const oldImages = [...images];
    const updatedImages = images.filter((image) => image.key !== key);
    //Update the state with the filtered images
    setImages(updatedImages);

    const response = await deleteImage(key);
    console.log(response);
    if (!response) setImages(oldImages);
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

  useEffect(() => {
    const handleGetAll = async () => {
      const data = await getAll();
      setImages(data);
    };
    handleGetAll();
  }, []);

  return (
    <main className="main">
      {images?.length === 0 ? (
        <div style={{ textAlign: "center" }}>
          <i className="fa fa-spinner fa-pulse fa-4x fa-fw"></i>
        </div>
      ) : (
        <section className="uploaded-images">
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
              <button
                onClick={() => {
                  handleRemove(item.key);
                }}
                className="remove-btn"
              >
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
          ))}
        </section>
      )}

      <UploadDropzone
        className="custom-class"
        endpoint="multipleImageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
          const newImages = res?.map(({ customId, key, name }) => {
            return { customId, key, name };
          });
          setImages([...images, ...newImages]);
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error.message}`);
        }}
        onUploadBegin={(name) => {
          // Do something once upload begins
          console.log("Uploading: ", name);
        }}
        onBeforeUploadBegin={handleBeforeUpload}
      />
    </main>
  );
};

export default Home;
